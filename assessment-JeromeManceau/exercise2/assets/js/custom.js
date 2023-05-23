/**
 * Custom JavaScript for exercise 2
 * Jerome Manceau
 */


function Section(title, content, isFirstSection=false) {
    var self = this;
    
    self.title = title;
    self.content = content;
    self.isActive = (isFirstSection) ? ko.observable(true) : ko.observable(false);

    self.toggleContent = function() {
        self.isActive(!self.isActive());
        if (self.isActive()) {
            self.closeOthers();
        }
    };

    self.closeOthers = function() {
        ko.utils.arrayForEach(viewModel.sections(), function(section) {
            if (section !== self) {
                section.isActive(false);
            }
        });
    };
}


function ViewModel() {
    var self = this;
    
    self.isDesktop = ko.observable(false);
    self.isMobile = ko.observable(false);
    self.activeTab = ko.observable(1);
    self.sections = ko.observableArray([]);

    // Read the JSON file
    $.getJSON("assets/json/data.json", function(data) { 
        var isFirstSection = true;
        ko.utils.arrayForEach(data, function(section) {
            self.sections.push(new Section(section.title, section.content, isFirstSection));
            isFirstSection = false;
        });
    });

    // Function for device detection
    self.detectDevice = function() {
        self.isDesktop(window.innerWidth >= 768);
        self.isMobile(window.innerWidth < 768);

    };
    
    // Subscribe to window resize event
    $(window).resize(self.detectDevice);
    
    
    // Initialize device detection
    self.detectDevice();
}

var viewModel = new ViewModel();
ko.applyBindings(viewModel);