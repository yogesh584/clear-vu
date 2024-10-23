const barConfig = {
    "annotations": {},
    "chart": {
        "animations": {
            "enabled": false,
            "easing": "swing"
        },
        "background": "#fff",
        "fontFamily": "Lexend",
        "height": 373,
        "id": "usFhj",
        "stackOnlyBar": true,
        "toolbar": {
            "show": false
        },
        "type": "bar",
        "width": 510,
        "zoom": {
            "allowMouseWheelZoom": true
        },
        "fontUrl": null
    },
    "plotOptions": {
        "line": {
            "isSlopeChart": false
        },
        "bar": {
            "columnWidth": "59%",
            "borderRadius": 10,
            "borderRadiusApplication": "end",
            "borderRadiusWhenStacked": "last",
            "hideZeroBarsWhenGrouped": false,
            "isDumbbell": false,
            "isFunnel": false,
            "isFunnel3d": true,
            "dataLabels": {
                "total": {
                    "enabled": false,
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                        "color": "#373d3f",
                        "fontSize": "12px",
                        "fontWeight": 600
                    }
                }
            }
        },
        "bubble": {
            "zScaling": true
        },
        "treemap": {
            "borderRadius": 4,
            "dataLabels": {
                "format": "scale"
            }
        },
        "radialBar": {
            "hollow": {
                "background": "#fff"
            },
            "dataLabels": {
                "name": {},
                "value": {},
                "total": {}
            },
            "barLabels": {
                "enabled": false,
                "offsetX": 0,
                "offsetY": 0,
                "useSeriesColors": true,
                "fontWeight": 600,
                "fontSize": "16px"
            }
        },
        "pie": {
            "donut": {
                "labels": {
                    "name": {},
                    "value": {},
                    "total": {}
                }
            }
        }
    },
    "colors": [
        "#39D9A7",
        "#9CD327",
        "#39D9A7",
        "#9CD327",
        "#39D9A7",
        "#9CD327",
        "#39D9A7",
        "#9CD327",
        "#39D9A7",
        "#9CD327",
        "#39D9A7",
        "#9CD327"
    ],
    "dataLabels": {
        "enabled": false,
        "style": {
            "fontWeight": 700
        }
    },
    "grid": {
        "padding": {
            "right": 25,
            "left": 15
        }
    },
    "legend": {
        "show": false,
        "fontSize": 14,
        "offsetY": 0,
        "markers": {
            "size": 7,
            "shape": "square"
        },
        "itemMargin": {
            "vertical": 0
        }
    },
    "markers": {},
    "stroke": {
        "colors": [
            "#fff"
        ],
        "fill": {
            "type": "solid",
            "opacity": 0.85,
            "gradient": {
                "shade": "dark",
                "type": "horizontal",
                "shadeIntensity": 0.5,
                "inverseColors": true,
                "opacityFrom": 1,
                "opacityTo": 1,
                "stops": [
                    0,
                    50,
                    100
                ],
                "colorStops": []
            }
        }
    },
    "tooltip": {
        "shared": false,
        "hideEmptySeries": false,
        "intersect": true
    },
    "xaxis": {
        "labels": {
            "rotate": -53,
            "rotateAlways": true,
            "style": {
                "fontSize": 11,
                "fontWeight": 300
            }
        },
        "group": {
            "groups": [],
            "style": {
                "colors": [],
                "fontSize": "12px",
                "fontWeight": 400,
                "cssClass": ""
            }
        },
        "tickPlacement": "between",
        "title": {
            "text": "",
            "offsetX": -51,
            "style": {
                "fontSize": 9,
                "fontWeight": 600
            }
        },
        "tooltip": {
            "enabled": false
        }
    },
    "yaxis": {
        "tickAmount": 5,
        "labels": {
            "showDuplicates": false,
            "style": {
                "colors": [
                    null,
                    null,
                    null,
                    null,
                    null
                ]
            }
        },
        "title": {
            "style": {}
        }
    }
}

export default barConfig