$(document).ready(function () {
    ! function (t) {
        "use strict";
        t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = t(this.hash);
                if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return t("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3, "easeInOutExpo"), !1
            }
        }), t(".js-scroll-trigger").click(function () {
            t(".navbar-collapse").collapse("hide")
        }), t("body").scrollspy({
            target: "#sideNav"
        })
    }(jQuery);

    $(".modalbutton").on("click", function () {
        var buttonVal = $(this).attr("value")
        console.log("button has value: " + buttonVal)
        // debugger;

        $(".modal").modal("show")
        $(".modal-body").empty()

        switch (buttonVal) {
            case "1":

                $(".modal-title").html("Tripping - Project 1")
                $(".modal-body").html(
                    "<p>Scope of Project: Provide Ticket Prices, Weather, and Events for quick getaways (within 14 days). Because we all need to step away from the real world from time to time.</p> <p>API's Used: Eventbrite, Amedeus Flight Search, Open Weather</p> <p>Library's Used: Airport AutoComplete (Gathers IATA Codes in a Drop Down, also provides long/lat data for use in other api's), FUSE.js (Used in Conjunction with Airport AutoComplete, Boostrap v4.3.1.</p>")

                break;


            case "2":

                $(".modal-title").html("Train Scheduler")
                $(".modal-body").html(
                    "<p>Welcome to the train scheduler. This application provides time arrival time and time to arrival. This application is dynamic i.e., the minutes to arrival is updatedd every minute </p> <p> Every user can view the same information on there device</p> <p>Library's Used: Airport AutoComplete (Gathers IATA Codes in a Drop Down, also provides long/lat data for use in other api's), FUSE.js (Used in Conjunction with Airport AutoComplete, Boostrap v4.3.1.</p>")
                break;

            case "3":

                $(".modal-title").html("Tripping - Project 1")
                $(".modal-body").html(
                    "<p>Scope of Project: Provide Ticket Prices, Weather, and Events for quick getaways (within 14 days). Because we all need to step away from the real world from time to time.</p> <p>API's Used: Eventbrite, Amedeus Flight Search, Open Weather</p> <p>Library's Used: Airport AutoComplete (Gathers IATA Codes in a Drop Down, also provides long/lat data for use in other api's), FUSE.js (Used in Conjunction with Airport AutoComplete, Boostrap v4.3.1.</p>")

                break;

            default:
                $(".modal-title").html("Tripping - Project 1")
                $(".modal-body").html(
                    "test")

        }


    })


    $(".rotate").on("click", function () {
        $(this).toggleClass("down");
    });


})