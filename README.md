# JavaScript example in APIGEE

Thomas Hegarty for MS3

## Overview

This project demos the ability of a JavaScript connector to use APIGEE almost as an experience layer API. It uses the DND5E API, which can be found at `http://dnd5eapi.co`, and more specifically the `/classes` endpoint.

### Functionality

A call to this proxy at `http://dnd5eapi.co/api/classes` will first call out to the classes endpoint which returns an object structured like the following: 

```
{
	"count": 12,
	"results": [
		{
			"name": "Barbarian",
			"url": "http://www.dnd5eapi.co/api/classes/1"
		},
		{
			"name": "Bard",
			"url": "http://www.dnd5eapi.co/api/classes/2"
		},
		...[etc]...
	]
}
```
The JavaScript uses APIGEE's httpClient functionality to then make an additional call to each url included in the results array and appending that expanded class info object to the original JSON object. This is only called if `request.path equals "/api/classes"`, so it doesn't break any other return object functionality, but the general behavior is easily expandable using more javascript functions.

### Other notes

The proxy also implements rate limiting, apikey verification, and logging. All of these can be removed or disabled for testing only the javascript functionality.