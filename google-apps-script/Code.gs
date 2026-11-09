/**
 * ============================================================================
 * PINTARIA SD - GOOGLE APPS SCRIPT AUTHENTICATION BACKEND
 * ============================================================================
 * 
 * Script ini mengelola database authentication di Google Spreadsheet milik Admin.
 * 
 * PETUNJUK DEPLOY:
 * 1. Buka https://script.google.com/
 * 2. Buat project baru dengan nama "Pintaria Auth Backend"
 * 3. Hapus seluruh isi Code.gs, lalu paste seluruh isi berkas ini.
 * 4. Klik tombol "Deploy" -> "New deployment"
 * 5. Pilih Type: "Web app"
 * 6. Configuration:
 *    - Description: "Pintaria Auth Web App v1"
 *    - Execute as: "Me (email admin)"
 *    - Who has access: "Anyone" (wajib agar aplikasi dapat mengakses API)
 * 7. Klik "Deploy", lalu klik "Authorize access" dengan akun Google Admin.
 * 8. Salin "Web app URL" (berakhiran /exec) dan simpan di menu Admin Dashboard Pintaria!
 */

// Konfigurasi Admin Emails
var ADMIN_EMAILS = [
  "nahdiyatulummah31@gmail.com",
  "rekrutmenrsutrimedikaketapang@gmail.com",
  "admin@pintaria.com"
];

var SPREADSHEET_NAME = "Pintaria_Auth_Database";

/**
 * Mendapatkan atau membuat otomatis Spreadsheet Database jika belum ada
 */
function getOrCreateDatabase() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty("AUTH_SPREADSHEET_ID");
  var ss;

  if (ssId) {
    try {
      ss = SpreadsheetApp.openById(ssId);
    } catch (e) {
      ss = null;
    }
  }

  if (!ss) {
    // Buat Spreadsheet baru di Google Drive milik Admin
    ss = SpreadsheetApp.create(SPREADSHEET_NAME);
    props.setProperty("AUTH_SPREADSHEET_ID", ss.getId());

    // Inisialisasi sheet USERS
    var usersSheet = ss.getSheetByName("Sheet1") || ss.insertSheet("USERS");
    usersSheet.setName("USERS");
    usersSheet.appendRow([
      "user_id",
      "google_id",
      "email",
      "full_name",
      "username",
      "password_hash",
      "password_salt",
      "role",
      "status",
      "registered_at",
      "last_login_at",
      "last_logout_at",
      "active_session_id",
      "session_created_at",
      "last_activity_at"
    ]);
    usersSheet.setFrozenRows(1);
    usersSheet.getRange("1:1").setFontWeight("bold").setBackground("#FEF3C7");

    // Inisialisasi sheet LOGIN_LOG
    var logSheet = ss.insertSheet("LOGIN_LOG");
    logSheet.appendRow([
      "log_id",
      "user_id",
      "email",
      "username",
      "product_id",
      "login_method",
      "login_at",
      "logout_at",
      "session_id",
      "status"
    ]);
    logSheet.setFrozenRows(1);
    logSheet.getRange("1:1").setFontWeight("bold").setBackground("#FEF3C7");

    // Inisialisasi sheet USER_ACCESS
    var accessSheet = ss.insertSheet("USER_ACCESS");
    accessSheet.appendRow([
      "access_id",
      "user_id",
      "email",
      "product_id",
      "product_name",
      "status",
      "granted_at",
      "expired_at",
      "granted_by"
    ]);
    accessSheet.setFrozenRows(1);
    accessSheet.getRange("1:1").setFontWeight("bold").setBackground("#FEF3C7");

    // Inisialisasi sheet SETTINGS
    var settingsSheet = ss.insertSheet("SETTINGS");
    settingsSheet.appendRow(["setting", "value"]);
    settingsSheet.appendRow(["APP_NAME", "Pintaria SD Multi-Kurikulum"]);
    settingsSheet.appendRow(["SESSION_TIMEOUT_HOURS", "24"]);
    settingsSheet.appendRow(["ADMIN_EMAIL", "nahdiyatulummah31@gmail.com"]);
    settingsSheet.appendRow(["CREATED_AT", new Date().toISOString()]);
    settingsSheet.setFrozenRows(1);
    settingsSheet.getRange("1:1").setFontWeight("bold").setBackground("#FEF3C7");
  }

  return ss;
}

/**
 * Handle HTTP GET (Ping & Get Users)
 */
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "PING";

  if (action === "PING") {
    var ss = getOrCreateDatabase();
    return createJsonResponse({
      status: "OK",
      message: "Pintaria Auth Backend is active and connected to Spreadsheet.",
      spreadsheet_id: ss.getId(),
      spreadsheet_url: ss.getUrl()
    });
  }

  if (action === "GET_USERS") {
    var ss = getOrCreateDatabase();
    var sheet = ss.getSheetByName("USERS");
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var users = [];

    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var userObj = {};
      for (var j = 0; j < headers.length; j++) {
        userObj[headers[j]] = row[j];
      }
      users.push(userObj);
    }

    return createJsonResponse({ status: "OK", users: users });
  }

  return createJsonResponse({ status: "ERROR", message: "Unknown action" });
}

/**
 * Handle HTTP POST (Register, Login, Update, Log)
 */
function doPost(e) {
  try {
    var postData = "";
    if (e && e.postData && e.postData.contents) {
      postData = JSON.parse(e.postData.contents);
    } else {
      return createJsonResponse({ status: "ERROR", message: "No data payload provided" });
    }

    var action = postData.action || "UNKNOWN";
    var ss = getOrCreateDatabase();

    if (action === "REGISTER") {
      var usersSheet = ss.getSheetByName("USERS");
      usersSheet.appendRow([
        postData.user_id || ("usr_" + new Date().getTime()),
        postData.google_id || "",
        (postData.email || "").toLowerCase().trim(),
        postData.full_name || "",
        (postData.username || "").toLowerCase().trim(),
        postData.password_hash || "",
        postData.password_salt || "",
        postData.role || "USER",
        postData.status || "ACTIVE",
        postData.registered_at || new Date().toISOString(),
        postData.last_login_at || new Date().toISOString(),
        "",
        postData.active_session_id || "",
        postData.session_created_at || new Date().toISOString(),
        postData.last_activity_at || new Date().toISOString()
      ]);

      return createJsonResponse({ status: "OK", message: "User registered successfully in Spreadsheet" });
    }

    if (action === "LOGIN" || action === "GOOGLE_LOGIN") {
      var logSheet = ss.getSheetByName("LOGIN_LOG");
      logSheet.appendRow([
        "log_" + new Date().getTime(),
        postData.user_id || "",
        postData.email || "",
        postData.username || "",
        postData.product_id || "",
        postData.login_method || "PASSWORD",
        postData.login_at || new Date().toISOString(),
        "",
        postData.session_id || "",
        postData.status || "SUCCESS"
      ]);

      // Update USERS sheet active_session_id and last_login_at
      updateUserField(ss, postData.email, {
        active_session_id: postData.session_id,
        last_login_at: postData.login_at || new Date().toISOString(),
        last_activity_at: new Date().toISOString()
      });

      return createJsonResponse({ status: "OK", message: "Login recorded" });
    }

    if (action === "LOGOUT") {
      updateUserField(ss, postData.email, {
        active_session_id: "",
        last_logout_at: postData.logout_at || new Date().toISOString()
      });
      return createJsonResponse({ status: "OK", message: "Logout recorded" });
    }

    if (action === "UPDATE_USER_STATUS") {
      updateUserFieldById(ss, postData.user_id, {
        status: postData.status
      });
      return createJsonResponse({ status: "OK", message: "User status updated" });
    }

    if (action === "TERMINATE_SESSION") {
      updateUserFieldById(ss, postData.user_id, {
        active_session_id: ""
      });
      return createJsonResponse({ status: "OK", message: "Session terminated" });
    }

    return createJsonResponse({ status: "ERROR", message: "Unhandled action: " + action });

  } catch (error) {
    return createJsonResponse({ status: "ERROR", message: error.toString() });
  }
}

/**
 * Helper Update Field User berdasarkan Email
 */
function updateUserField(ss, email, fieldUpdates) {
  if (!email) return;
  var sheet = ss.getSheetByName("USERS");
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var emailIdx = headers.indexOf("email");

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][emailIdx]).toLowerCase().trim() === String(email).toLowerCase().trim()) {
      for (var field in fieldUpdates) {
        var colIdx = headers.indexOf(field);
        if (colIdx !== -1) {
          sheet.getRange(i + 1, colIdx + 1).setValue(fieldUpdates[field]);
        }
      }
      break;
    }
  }
}

/**
 * Helper Update Field User berdasarkan User ID
 */
function updateUserFieldById(ss, userId, fieldUpdates) {
  if (!userId) return;
  var sheet = ss.getSheetByName("USERS");
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var idIdx = headers.indexOf("user_id");

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][idIdx]) === String(userId)) {
      for (var field in fieldUpdates) {
        var colIdx = headers.indexOf(field);
        if (colIdx !== -1) {
          sheet.getRange(i + 1, colIdx + 1).setValue(fieldUpdates[field]);
        }
      }
      break;
    }
  }
}

/**
 * Helper response JSON
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
