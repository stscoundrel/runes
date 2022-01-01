 // Force certain date to keep test deterministic.
 jest.useFakeTimers('modern');
 jest.setSystemTime(new Date(2021, 1, 1, 1, 1, 1));
