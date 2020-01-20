$(() => {
    
const $container = $('#div')    
console.log($container)

const $h1 = $("<h1>")
$("body").append($h1)
$h1.text("Hogwarts")






//year 2
const $h2 = $("<h2>");
$("body").append($h2)
$h2.text("Phi Huynh");


const $h3 = $("<h3>");
$("body").append($h3)
$h3.text("Ravenclaw");

const $h4 = $("<h4>").addClass("canine");
$("body").append($h4)
$h4.text("Ben-Ben");

const $h4Wand = $("<h4>");
$("body").append($h4Wand)
$h4Wand.text("Holly Wand with Unicorn Hair Core");







//year3

const $ul = $("<ul>");
$("body").append($ul)
$ul.attr("id", "container");

$ul.append("<li>Butter Beer</li>")
$ul.append("<li>Invisible Cloak</li>")
$ul.append("<li>Magic Map</li>")
$ul.append("<li>Time Turner</li>")
$ul.append("<li>Leash</li>")
$ul.append("<li>Bertie Bott's Every Flavor [Jelly] Beans</li>")

$("#container li").slice(3,4).addClass('secret');
$("#container li").slice(2,4).addClass('secret')
$("#container li").slice(1,4).addClass('secret')
$("#container li").slice(4,5).addClass('canine')



//year4

const $h5 = $("<h5>")
$("body").append($h5)
$h5.text("Spring 2017")


const $table = $("<table>")
$("body").append($table)
$table.append("<thead></thead>").append("<th>Day</th>").append("<th>Classes</th>")
$table.append("<tr></tr>").append("<td>Monday</td>").append("<td>Charms</td>")
$table.append("<tr></tr>").append("<td>Tuesday</td>").append("<td>History of Magic</td>")
$table.append("<tr></tr>").append("<td>Wednesday</td>").append("<td>Quidditch</td>")
$table.append("<tr></tr>").append("<td>Thursday</td>").append("<td>Herbology</td>")
$table.append("<tr></tr>").append("<td>Friday</td>").append("<td>Divination</td>")







//year 5

$($h4Wand).remove()
$('li:contains("Butter Beer")').remove();



const $newWand = $("<h4>");
$("body").append($newWand)
$newWand.text("Holly Wand with Ben-Ben Hair").insertAfter($h4);

$newWand.css("color", "indigo");

$table.after($h4)

$h3.after($h4)







//year 6

$(".secret").hide("slow").delay(2000).show("slow")

$("#container li").slice(3,4).addClass('cabbage')

$(".canine").removeClass("cabbage")







//year 7


$h5.text("Fall 2018")


$ul.prepend("<li>Butter Beer</li>")
$('li:contains("Butter Beer")').val("trunk")

$('li:contains("Butter Beer")').val("chest")

















});

  



