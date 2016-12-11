var ANIMALS_FILE = "[\n  " + [
'{"name" : "Fluffykins",	"species" : "rabbit" }',
'{"name" : "Caro",	      "species" : "dog" }',
'{"name" : "Hammilton",	  "species" : "dog" }',
'{"name" : "Harold",	    "species" : "fish" }',
'{"name" : "Ursula",	    "species" : "cat" }',
'{"name" : "Jimmy",    	  "species" : "fish" }'
].join(",\n  ") + "\n]";
if (typeof module != "undefined" && module.exports)
module.exports = ANIMALS_FILE;
