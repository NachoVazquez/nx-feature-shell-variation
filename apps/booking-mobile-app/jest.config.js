module.exports = {
  name: 'booking-mobile-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/booking-mobile-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
