define( [
        // Load the properties.js file using requireJS
        // Note: If you load .js files, omit the file extension, otherwhise
        // requireJS will not load it correctly 
        './properties'
    ],
    function ( props ) {
        'use strict';

        return {

            definition: props,
            paint: function ( $element , layout ) {
 // Output values from the property panel
                $element.empty();

                // Our output container
                var $msg = $( document.createElement( 'div' ) );

                // Variable holding the output
                var html = '<b>Property values:</b><br/>';
                html += 'Title: ' + layout.title + '<br/>';
                html += 'SubTitle: ' + layout.subtitle + '<br/>';

                // Assigning the variable to our output container
                $msg.html( html );

                // Adding the output container to the current element
                $element.append( $msg );
            }
            }
        }
    }
);
