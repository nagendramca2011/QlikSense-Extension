define( [
        'jquery',
        'qlik'
    ],
    function ( $, qlik ) {
        'use strict';
        
        return {
            // Define how our property panel looks like
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    dimensions:{
                        uses:"dimensions"
                    },
                    measures:{
                        uses:"measures"
                    },
                    sorting:{
                        uses:"sorting"
                    },
                    apperance:{
                        uses:"settings"
                    }

                }
            },
            //Paint resp.Rendering logic
            paint: function ( $element, layout ) {
                // Output values from the property panel
                $element.empty();

                var qTable = qlik.table(this);

                var $exportButton = $( document.createElement('button'));
                $exportButton.html('Export');
                $exportButton.bind('click', function (  ) {
                    qTable.exportData(
                    {
                        format:"CSV_C",
                        download: true
                    });
                });
                $element.append($exportButton);
            }
        };
    } );
