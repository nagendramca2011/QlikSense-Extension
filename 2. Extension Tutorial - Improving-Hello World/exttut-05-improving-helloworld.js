define( [
        'jquery'
    ],
    function ( $ ) {
        'use strict';
        
        return {
            // Define how our property panel looks like
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    appearancePanel: {
                        uses: "settings",
                        items: {
                            MyStringProp: {
                                ref: "myDynamicOutput",
                                type: "string",
                                label: "Hello World Text"
                            }
                        }
                    }
                }
            },
            //Paint resp.Rendering logic
            paint: function ( $element, layout ) {
                $element.empty();
                var $helloWorld = $( document.createElement( 'div' ) );
                $helloWorld.html( 'Hello World from the extension "HelloWorld Improvement" -Author: Nagendra<br/>' );
                $helloWorld.html(layout.myDynamicOutput);
                $element.append( $helloWorld );

            }
        };
    } );
