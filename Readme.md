# 📧 Custom SMTP Gateway Plugin

This is an **open-source plugin** for **connecting to a custom SMTP server** in Webito. Using this plugin, you can easily send confirmation, notification, and promotional emails through your own SMTP server. Just **activate the plugin**, enter your **SMTP settings**, and start sending emails!

## ✨ Features
- 📩 Send **HTML and text emails**
- 🔒 Support for **SSL/TLS** for secure connections
- ⚡ Easy integration—just activate and configure
- 🌍 Support for all standard SMTP servers
- 🎯 Automatic HTML and text content management

## 🔧 How to Use
1. Activate the plugin in **Webito**.
2. Enter your **SMTP settings**:
   - **Host**: SMTP server address (e.g., smtp.gmail.com)
   - **Port**: Server port (e.g., 587 or 465)
   - **Username**: SMTP username
   - **Password**: SMTP password
3. Now you can send your emails.

## 📋 Recommended Settings

### Gmail
- Host: `smtp.gmail.com`
- Port: `587` (TLS) or `465` (SSL)
- Username: Your Gmail address
- Password: App Password

### Outlook/Hotmail
- Host: `smtp-mail.outlook.com`
- Port: `587`
- Username: Your Outlook email address
- Password: Your password

### Other SMTP Servers
- Use the settings provided by your email service provider.

## 🔗 Customization and Development
This plugin is **open-source**! Developers can:
- Fork the repository and make desired changes.
- Upload their customized version to **Webito**.
- Share the repository link for direct installation.

## 🛠️ Installation and Setup

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run build

# Run the plugin
npm start
```

## 📜 License
This plugin is released under the **MIT License** and your contributions are welcome! 🚀
