Package.describe({
  summary: "Meteor smart package for knox.",
  version: "0.9.11",
  git: "https://github.com/classcraft/classcraft-knox"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('classcraft:knox.js', 'server');
  api.export('Knox', 'server');
});

Npm.depends({
  knox: '0.9.1'
});
