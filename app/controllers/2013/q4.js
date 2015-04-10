import Ember from 'ember';

export default Ember.Controller.extend({
			myRenderOptions:{
				"height":"700",
				"width":"100%",
				"background-color":"none"
			},
			myChartData:{
				"graphset":[
				{
			        "type":"waterfall",
			        "x":0,
			        "y":0,
			        "font-family":"Noto Sans",
			        "width":"100%",
			        "height":"50%",
			        "background-color":"none", //#F2F2F0
			        "plotarea":{
			            "margin":"dynamic",
			            "margin-top":"14%",
			            "margin-bottom":"18%"
			        },
			        "title":{
			        	"font-family":"Noto Sans",
			            "text":"Stockholder's Equity",
			            "background-color":"none",
			            "color":"#333"
			        },
			        "scaleX":{
			            "guide":{
			                "visible":false
			            },
			            "tick":{
			                "line-color":"#333"
			            },
			            "line-color":"#666",
			            "item":{
			                "wrapText":true,
			                "color":"#333",
			                "font-family":"Noto Sans"
			            },
			            "values":["Cash","Equipment","Short-term Assets","Other Assets","Total Assets","Current<br>Product Liabilities","Accounts Payable","Accrued Expenses","Deferred Revenue","Stockholders' Equity"]
			        },
			        "scaleY":{
			            "tick":{
			                "line-color":"#333"
			            },
			            "line-color":"#333",
			            "guide":{
			                "lineStyle":"solid"
			            },
			            "label":{
			                "text":"USD (in thousands)",
			                "color":"#333",
			                "font-family":"Noto Sans"
			            },
			            "item":{
			                "wrapText":true,
			                "color":"#333",
			                "font-family":"Noto Sans"
			            },
			            "short":true,
			            "thousandsSeparator":","
			        },
			        "options":{
			            "positive":{
			                "backgroundColor":"#43ac6a"
			            },
			            "negative":{
			                "backgroundColor":"#C47065"
			            },
			            "intermediate":{
			                "backgroundColor":"#008cba"
			            },
			            "final":{
			                "backgroundColor":"#333"
			            },
			            "line":{
			                "lineColor":"#666",
			                "lineWidth":2,
			                "lineStyle":"solid",
			                "alpha":0.5
			            }
			        },
			        "tooltip":{
			            "fontSize":15,
			            "font-family":"Noto Sans",
			            "align":"left",
			            "borderRadius":3,
			            "borderWidth":2,
			            "borderColor":"%color-1",
			            "backgroundColor":"#fff",
			            "alpha":0.9,
			            "padding":10,
			            "color":"#000",
			            "negation":"currency",
			            "thousandsSeparator":",",
			            "shadow":0,
			            "text":"<b style=\"color:%color\">%negation$%node-valuem</b> USD"
			        },
			        "plot":{
			            "barWidth":0.75,
			            "animation":{
			                "speed":250,
			                "method":1,
			                "effect":4,
			                "sequence":2
			            }
			        },
			        "series":[
			            {
			                "values":[150419,192302,265933,34201,"SUM",-233180,-67829,-46264,-143045,"SUM"]
			            }
			        ]
			    },
				{
					"type":"pie",
					"x":0,
			        "y":"50%",
			        "width":"33%",
			        "height":"50%",
					"background-color":"none",
					"title":{
						"text":"Company Liabilities Breakdown",
						"font-family":"Noto Sans",
						"background-color":"none",
						"color":"#333"
					},
					"plot":{
						"slice":20,
						"shadow":0,
						"border-width":"5px",
						"border-color":"#F2F2F0",
						"value-box":{
							"placement":"out",
							"font-size":"10px",
							"font-color":"#333",
							"font-weight":"none",
							"font-family":"Noto Sans"
						},
						"animation":{
							"effect":"2",
							"delay":"1000",
							"speed":"500",
							"method":"5",
							"sequence":"1"
						}
					},
					"plotarea":{
						"margin": "1%"
					},
					"tooltip":{
						"fontSize":15,
						"font-family":"Noto Sans",
						"align":"left",
						"borderRadius":3,
						"borderWidth":2,
						"borderColor":"%color-1",
						"backgroundColor":"#fff",
						"alpha":0.9,
						"padding":10,
						"color":"#000",
						"negation":"currency",
						"thousandsSeparator":",",
						"shadow":0,
						"text":"<b style=\"color:%color\">%negation$%node-valuem</b> USD"
					},
					"series":[
					{
						"text":"Current Product<br>Libabilities",
						"values":[924706],
						"background-color":"#C4473F"
					},
					{
						"text":"Accounts<br>Payable",
						"values":[87860],
						"background-color":"#CE8580"
					},
					{
						"text":"Accrued<br>Expenses",
						"values":[63693],
						"background-color":"#442C2B"
					},
					{
						"text":"Deferred<br>Revenue",
						"values":[148796],
						"background-color":"#91352F"
					}
					]
				},
				{
					"type":"pie",
					"x":"33%",
			        "y":"50%",
			        "width":"33%",
			        "height":"50%",
					"background-color":"none",
					"title":{
						"text":"Company Assets Breakdown",
						"font-family":"Noto Sans",
						"background-color":"none",
						"color":"#333"
					},
					"plot":{
						"slice":20,
						"shadow":0,
						"border-width":"5px",
						"border-color":"#F2F2F0",
						"value-box":{
							"placement":"out",
							"font-size":"10px",
							"font-color":"#333",
							"font-weight":0,
							"font-family":"Noto Sans"
						},
						"animation":{
							"effect":"2",
							"delay":"1000",
							"speed":"500",
							"method":"5",
							"sequence":"1"
						}
					},
					"plotarea":{
						"margin":"8%"
					},
					"tooltip":{
						"fontSize":15,
						"font-family":"Noto Sans",
						"align":"left",
						"borderRadius":3,
						"borderWidth":2,
						"borderColor":"%color-1",
						"backgroundColor":"#fff",
						"alpha":0.9,
						"padding":10,
						"color":"#000",
						"negation":"currency",
						"thousandsSeparator":",",
						"shadow":0,
						"text":"<b style=\"color:%color\">%negation$%node-valuem</b> USD"
					},
					"series":[
					{
						"text":"Cash",
						"values":[508053],
						"background-color":"#329456"
					},
					{
						"text":"Equipment",
						"values":[289758],
						"background-color":"#43C774"
					},
					{
						"text":"Short-term<br>Assets",
						"values":[919709],
						"background-color":"#80BA96"
					},
					{
						"text":"Other<br>Assets",
						"values":[57330],
						"background-color":"#2E4737"
					}
					]
				},
				 {
			        "type":"bullet",
			        "x":"66%",
			        "y":"50%",
					"width":"33%",
					"height":"50%",
			        "background-color":"none",
			        "title":{
			            "text":"Sales Revenue",
			            "font-family":"Noto Sans",
			            "background-color":"none",
			            "color":"#333"
			        },
			        "plotarea":{
			            "margin-top":"14%",
			            "margin-bottom":"18%"
			        },
			        "scaleX":{
			            "guide":{
			                "visible":false
			            },
			            "label":["Sales Revenue Streams"],
			            "values":["Breakfast Menu","Main Menu","Dessert Items"],
			            "tick":{
			                "line-color":"#333"
			            },
			            "line-color":"#666",
			            "item":{
			                "wrapText":true,
			                "color":"#333",
			                "font-family":"Noto Sans",
			            }
			        },
			        "tooltip":{
			            "fontSize":15,
			            "font-family":"Noto Sans",
			            "align":"left",
			            "borderRadius":3,
			            "borderWidth":2,
			            "borderColor":"%color-1",
			            "backgroundColor":"#fff",
			            "shadow":0,
			            "alpha":0.9,
			            "padding":10,
			            "color":"#000",
			            "negation":"currency",
			            "thousandsSeparator":",",
			            "text":"<b style=\"color:%color\">%negation$%node-valuem</b> USD"
			        },
			        "scaleY":{
			            "tick":{
			                "line-color":"#333"
			            },
			            "line-color":"#333",
			            "guide":{
			                "lineStyle":"solid"
			            },
			            "item":{
			                "wrapText":true,
			                "color":"#333",
			                "font-family":"Noto Sans"
			            },
			            "short":true,
			            "thousands-separator":","
			        },
			        "plot":{
			            "goal":{
			                "background-color":"#C4473F"
			            },
			            "rules":[
			                {
			                    "rule":"%i==0",
			                    "background-color":"#87E1FF"
			                },
			                {
			                    "rule":"%i==1",
			                    "background-color":"#008cba"
			                },
			                {
			                    "rule":"%i==2",
			                    "background-color":"#00526D"
			                }
			            ]
			        },
			        "series":[
			            {
			                "values":[1670269,2159008,1317015],
			                "goals":[1521000,2430000,1020012]
			            }
			        ]
			    }
				]
			},
			myThemeData:{
				"palette" : [
				["#ffffff", "#196eed", "#196eed", "#196eed"],
				["#ffffff", "#d94530", "#d94530", "#d94530"],
				["#ffffff", "#fdb82b", "#fdb82b", "#fdb82b"],
				["#ffffff", "#159755", "#159755", "#159755"],
				["#ffffff", "#8e8e8e", "#8e8e8e", "#8e8e8e"]
				]
			}
});
