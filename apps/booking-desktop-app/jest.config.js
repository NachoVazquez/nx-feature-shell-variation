module.exports = {
  name: 'booking-desktop-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/booking-desktop-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
