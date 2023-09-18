define(["jquery", "accordion"], function ($) {
    $("#custom-accordion").accordion({
        animate: { duration: 100 },
        active: [0],
        collapsible: true,
        openedState: "active",
    });

    $("#custom-tab").accordion({
        animate: { duration: 100 },
        active: [0],
        collapsible: true,
        openedState: "active",
    });
});
