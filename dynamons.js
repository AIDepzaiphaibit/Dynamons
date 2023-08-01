var revive_tag = document.getElementById("revive")
var sonic_shock_tag = document.getElementById("sonic-shock")
var flash_tag = document.getElementById("flash")
var iceberg_tag = document.getElementById("iceberg")

MAX_HEALTH = 500
health1 = 400
health2 = 500
Dynamons1 = "PODAPOD"
Dynamons2 = "JEEMPY"

/* Revive Skill */
function percent(num, per) {return (num/100)*per}

revive = percent(health1, 30)
revived = health1 + revive
revive_damage = 0
revive_cooldown = 1
reviving = false

function revive_feature() {
	var elems = document.querySelectorAll("#revive")
	for (var i = elems.length; i--;) {elems[i].style.filter = "brightness(30%)"}
	if (health1 < MAX_HEALTH) {
		while (health1 <= revived) {health1 += 1}
		if (revived > MAX_HEALTH) {revived = MAX_HEALTH}
	}
	if (health1 >= MAX_HEALTH) {console.log(Dynamons1 + "'s health is full")}
}
/* Sonic Shock Skill */
sonic_shock_damage = 75
sonic_shock_cooldown = 1
sonic_shocking = false

function sonic_shock_feature() {
	var elems = document.querySelectorAll("#sonic-shock")
	for (var i = elems.length; i--;) {elems[i].style.filter = "brightness(30%)"}
}

/* Flash Skill */
flash_damage = 100
flash_cooldown = 2
flashing = false

function flash_feature() {
	var elems = document.querySelectorAll("#flash")
	for (var i = elems.length; i--;) {elems[i].style.filter = "brightness(30%)"}
}

/* Iceberg Skill */
iceberg_damage = 150
iceberg_cooldown = 3
iceberging = false

function iceberg_feature() {
	var elems = document.querySelectorAll("#iceberg")
	for (var i = elems.length; i--;) {elems[i].style.filter = "brightness(30%)"}
}

/* More Feature */
more_feature = false