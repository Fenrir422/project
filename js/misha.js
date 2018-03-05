function magicInlineGrid() {
        var hackElements = document.getElementsByClassName('hack');
        console.log(hackElements);
        if(hackElements.length) {
            while(hackElements[0]) {
                hackElements[0].parentNode.removeChild(hackElements[0]);
            }
            
        }

        console.log('deleted', document.getElementsByClassName('hack'));


        var items = document.getElementsByClassName('item');

        var last = items[items.length - 1];

        var dims = last.getBoundingClientRect();

        

        var distanceFromRightEndOfElementToLeftEndOfWindow = dims.right;

        var restOfWidth = window.innerWidth - distanceFromRightEndOfElementToLeftEndOfWindow;

        var node = document.createElement("DIV");

        node.className = 'item';

        var wholeWidth = distanceFromRightEndOfElementToLeftEndOfWindow + restOfWidth - dims.width - 50;

        var distanceToWindowFromFirstItem = document.getElementsByClassName('item')[0].offsetLeft;

        var distanceToWindowFromWrapper = document.getElementsByClassName('wrapper')[0].offsetLeft;

        var distanceFromElementToWrapper = distanceToWindowFromFirstItem - distanceToWindowFromWrapper;


        var generalItemWidth = dims.width;

        var currentConstainerWidth = document.getElementsByClassName('wrapper')[0].getBoundingClientRect().width;

        var containerWidthWithoutPaddings = currentConstainerWidth - (distanceFromElementToWrapper * 2);

        var numberOfElementsInOneRow = Math.round(containerWidthWithoutPaddings / generalItemWidth);

        var generalItemNumber = document.getElementsByClassName('item').length;

        var numberOfRows = generalItemNumber / numberOfElementsInOneRow;

        var isHackNeeded = Math.floor(numberOfRows) !== Math.ceil(numberOfRows);


        if(isHackNeeded) {
            var howManyElementsNeedsToBeAdded = Math.floor(Math.ceil(numberOfRows) * numberOfElementsInOneRow - generalItemNumber);
            console.log(Math.floor(howManyElementsNeedsToBeAdded));
            for(var i = 0; i < howManyElementsNeedsToBeAdded; i++) {
                var node = document.createElement("DIV");
                node.className = 'item hack';
                document.getElementsByClassName("wrapper")[0].appendChild(node); 
            }
        }
    }


    window.onresize = function(event) {
        magicInlineGrid()
    };

    magicInlineGrid();