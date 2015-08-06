# Show positions on map

This is a little tool to show positions on a google map coming from the JSON we're using in our apps.

Served at http://docs.ehealthafrica.org/positions-on-map-visualizer

Example JSON:

```json
[
  {
    "timestamp": "2015-08-04T18:37:48.000Z",
    "is_moving": false,
    "coords": {
      "longitude": 13.4198512,
      "latitude": 52.5004202,
      "speed": 0,
      "accuracy": 21.9060001373291,
      "altitude": 0,
      "heading": 0
    }
  },
  {
    "timestamp": "2015-08-06T10:11:15.000Z",
    "is_moving": true,
    "activity": {
      "type": "on_foot",
      "confidence": 80
    },
    "coords": {
      "longitude": 13.4090893,
      "latitude": 52.5279994,
      "speed": 0,
      "accuracy": 617,
      "altitude": 0,
      "heading": 0
    }
  },
  {
    "timestamp": "2015-08-06T10:22:27.000Z",
    "is_moving": false,
    "activity": {
      "type": "still",
      "confidence": 100
    },
    "coords": {
      "longitude": 13.4090893,
      "latitude": 52.5279994,
      "speed": 0,
      "accuracy": 617,
      "altitude": 0,
      "heading": 0
    }
  },
  {
    "timestamp": "2015-08-06T10:50:05.000Z",
    "is_moving": true,
    "activity": {
      "type": "in_vehicle",
      "confidence": 95
    },
    "coords": {
      "longitude": 13.4090893,
      "latitude": 52.5279994,
      "speed": 0,
      "accuracy": 617,
      "altitude": 0,
      "heading": 0
    }
  },
  {
    "timestamp": "2015-08-06T10:56:15.000Z",
    "is_moving": true,
    "activity": {
      "type": "still",
      "confidence": 54
    },
    "coords": {
      "longitude": 13.3852985,
      "latitude": 52.5353229,
      "speed": 0,
      "accuracy": 36,
      "altitude": 0,
      "heading": 0
    }
  },
  {
    "timestamp": "2015-08-06T10:56:15.000Z",
    "is_moving": false,
    "activity": {
      "type": "still",
      "confidence": 100
    },
    "coords": {
      "longitude": 13.3852985,
      "latitude": 52.5353229,
      "speed": 0,
      "accuracy": 36,
      "altitude": 0,
      "heading": 0
    }
  }
]
```
