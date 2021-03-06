var navjs = function(){
	var nv = {};
	var hsCodes = [];
	nv.readHSCodes = function ()
	{
		hsCodes = [
  {
   "name": "Animal & Animal Products",
   "code":"01-05",
   "children": [
    
      {"name": "ANIMALS; LIVE","code":"1","size": 0},
      {"name": "MEAT AND EDIBLE MEAT OFFAL","code":"2","size": 0},
      {"name": "FISH AND CRUSTACEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES","code":"3","size": 0},
      {"name": "DAIRY PRODUCE; BIRDS' EGGS; NATURAL HONEY; EDIBLE PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED","code":"4","size": 0},
      {"name": "ANIMAL ORIGINATED PRODUCTS; NOT ELSEWHERE SPECIFIED OR INCLUDED","code":"5","size": 0}

                ]
  },
    {
   "name": "Vegetable Products",
   "code":"06-15",
   "children": [
    
      {"name": "TREES AND OTHER PLANTS, LIVE; BULBS, ROOTS AND THE LIKE; CUT FLOWERS AND ORNAMENTAL FOLIAGE","code":"6","size": 0},
      {"name": "VEGETABLES AND CERTAIN ROOTS AND TUBERS; EDIBLE","code":"7","size": 0},
      {"name": "FRUIT AND NUTS, EDIBLE; PEEL OF CITRUS FRUIT OR MELONS","code":"8","size": 0},
      {"name": "COFFEE, TEA, MATE AND SPICES","code":"9","size": 0},
      {"name": "CEREALS","code":"10","size": 0},
      {"name": "PRODUCTS OF THE MILLING INDUSTRY; MALT, STARCHES, INULIN, WHEAT GLUTEN","code":"11","size": 0},
      {"name": "OIL SEEDS AND OLEAGINOUS FRUITS; MISCELLANEOUS GRAINS, SEEDS AND FRUIT, INDUSTRIAL OR MEDICINAL PLANTS; STRAW AND FODDER","code":"12","size": 0},
      {"name": "LAC; GUMS, RESINS AND OTHER VEGETABLE SAPS AND EXTRACTS","code":"13","size": 0},
      {"name": "VEGETABLE PLAITING MATERIALS; VEGETABLE PRODUCTS NOT ELSEWHERE SPECIFIED OR INCLUDED","code":"14","size": 0},
      {"name": "ANIMAL OR VEGETABLE FATS AND OILS AND THEIR CLEAVAGE PRODUCTS; PREPARED ANIMAL FATS; ANIMAL OR VEGETABLE WAXES","code":"15","size": 0}

                ]
    },
        {
   "name": "Foodstuffs",
   "code":"16-24",
   "children": [
    
      {"name": "MEAT, FISH OR CRUSTACEANS, MOLLUSCS OR OTHER AQUATIC INVERTEBRATES; PREPARATIONS THEREOF","code":"16","size": 0},
      {"name": "SUGARS AND SUGAR CONFECTIONERY","code":"17","size": 0},
      {"name": "COCOA AND COCOA PREPARATIONS","code":"18","size": 0},
      {"name": "PREPARATIONS OF CEREALS, FLOUR, STARCH OR MILK; PASTRYCOOKS' PRODUCTS","code":"19","size": 0},
      {"name": "PREPARATIONS OF VEGETABLES, FRUIT, NUTS OR OTHER PARTS OF PLANTS","code":"20","size": 0},
      {"name": "MISCELLANEOUS EDIBLE PREPARATIONS","code":"21","size": 0},
      {"name": "BEVERAGES, SPIRITS AND VINEGAR","code":"22","size": 0},
      {"name": "FOOD INDUSTRIES, RESIDUES AND WASTES THEREOF; PREPARED ANIMAL FODDER","code":"23","size": 0},
      {"name": "TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES","code":"24","size": 0}

                ]
        },
        {
   "name": "Mineral Products",
   "code":"25-27",
   "children": [
    
      {"name": "SALT; SULPHUR; EARTHS, STONE; PLASTERING MATERIALS, LIME AND CEMENT","code":"25","size": 0},
      {"name": "ORES, SLAG AND ASH","code":"26","size": 0},
      {"name": "MINERAL FUELS, MINERAL OILS AND PRODUCTS OF THEIR DISTILLATION; BITUMINOUS SUBSTANCES; MINERAL WAXES","code":"27","size": 0}

                ]
        },
                {
   "name": "Chemicals & Allied Industries",
   "code":"28-38",
   "children": [
    
      {"name": "INORGANIC CHEMICALS; ORGANIC AND INORGANIC COMPOUNDS OF PRECIOUS METALS; OF RARE EARTH METALS, OF RADIO-ACTIVE ELEMENTS AND OF ISOTOPES","code":"28","size": 0},
      {"name": "ORGANIC CHEMICALS","code":"29","size": 0},
      {"name": "PHARMACEUTICAL PRODUCTS","code":"30","size": 0},
      {"name": "FERTILIZERS","code":"31","size": 0},
      {"name": "TANNING OR DYEING EXTRACTS; TANNINS AND THEIR DERIVATIVES; DYES, PIGMENTS AND OTHER COLOURING MATTER; PAINTS, VARNISHES; PUTTY, OTHER MASTICS; INKS","code":"32","size": 0},
      {"name": "ESSENTIAL OILS AND RESINOIDS; PERFUMERY, COSMETIC OR TOILET PREPARATIONS","code":"33","size": 0},
      {"name": "SOAP, ORGANIC SURFACE-ACTIVE AGENTS; WASHING, LUBRICATING, POLISHING OR SCOURING PREPARATIONS; ARTIFICIAL OR PREPARED WAXES, CANDLES AND SIMILAR ARTICLES, MODELLING PASTES, DENTAL WAXES AND DENTAL PREPARATIONS WITH A BASIS OF PLASTER","code":"34","size": 0},
      {"name": "LBUMINOIDAL SUBSTANCES; MODIFIED STARCHES; GLUES; ENZYMES","code":"35","size": 0},
      {"name": "EXPLOSIVES; PYROTECHNIC PRODUCTS; MATCHES; PYROPHORIC ALLOYS; CERTAIN COMBUSTIBLE PREPARATIONS","code":"36","size": 0},
      {"name": "PHOTOGRAPHIC OR CINEMATOGRAPHIC GOODS","code":"37","size": 0},
      {"name": "CHEMICAL PRODUCTS N.E.C.","code":"38","size": 0}

                ]
        },
                {
   "name": "Plastics / Rubbers",
   "code":"39-40",
   "children": [
    
      {"name": "PLASTICS AND ARTICLES THEREOF","code":"39","size": 0},
      {"name": "RUBBER AND ARTICLES THEREOF","code":"40","size": 0}

                ]
        },
                {
   "name": "Raw Hides, Skins, Leather, & Furs",
   "code":"41-43",
   "children": [
    
      {"name": "RAW HIDES AND SKINS (OTHER THAN FURSKINS) AND LEATHER","code":"41","size": 0},
      {"name": "ARTICLES OF LEATHER; SADDLERY AND HARNESS; TRAVEL GOODS, HANDBAGS AND SIMILAR CONTAINERS; ARTICLES OF ANIMAL GUT (OTHER THAN SILK-WORM GUT)","code":"42","size": 0},
      {"name": "FURSKINS AND ARTIFICIAL FUR; MANUFACTURES THEREOF","code":"43","size": 0}

                ]
        },
                {
   "name": "Wood & Wood Products",
   "code":"44-49",
   "children": [
    
      {"name": "WOOD AND ARTICLES OF WOOD; WOOD CHARCOAL","code":"44","size": 0},
      {"name": "CORK AND ARTICLES OF CORK","code":"45","size": 0},
      {"name": "MANUFACTURES OF STRAW, ESPARTO OR OTHER PLAITING MATERIALS; BASKETWARE AND WICKERWORK","code":"46","size": 0},
      {"name": "PULP OF WOOD OR OTHER FIBROUS CELLULOSIC MATERIAL; RECOVERED (WASTE AND SCRAP) PAPER OR PAPERBOARD","code":"47","size": 0},
      {"name": "PAPER AND PAPERBOARD; ARTICLES OF PAPER PULP, OF PAPER OR PAPERBOARD","code":"48","size": 0},
      {"name": "PRINTED BOOKS, NEWSPAPERS, PICTURES AND OTHER PRODUCTS OF THE PRINTING INDUSTRY; MANUSCRIPTS, TYPESCRIPTS AND PLANS","code":"49","size": 0}

                ]
        },
                {
   "name": "Textiles",
   "code":"50-63",
   "children": [
    
      {"name": "SILK","code":"50","size": 0},
      {"name": "WOOL, FINE OR COARSE ANIMAL HAIR; HORSEHAIR YARN AND WOVEN FABRIC","code":"51","size": 0},
      {"name": "COTTON","code":"52","size": 0},
      {"name": "VEGETABLE TEXTILE FIBRES; PAPER YARN AND WOVEN FABRICS OF PAPER YARN","code":"53","size": 0},
      {"name": "MAN-MADE FILAMENTS; STRIP AND THE LIKE OF MAN-MADE TEXTILE MATERIALS","code":"54","size": 0},
      {"name": "MAN-MADE STAPLE FIBRES","code":"55","size": 0},
      {"name": "WADDING, FELT AND NONWOVENS, SPECIAL YARNS; TWINE, CORDAGE, ROPES AND CABLES AND ARTICLES THEREOF","code":"56","size": 0},
      {"name": "CARPETS AND OTHER TEXTILE FLOOR COVERINGS","code":"57","size": 0},
      {"name": "FABRICS; SPECIAL WOVEN FABRICS, TUFTED TEXTILE FABRICS, LACE, TAPESTRIES, TRIMMINGS, EMBROIDERY","code":"58","size": 0},
      {"name": "TEXTILE FABRICS; IMPREGNATED, COATED, COVERED OR LAMINATED; TEXTILE ARTICLES OF A KIND SUITABLE FOR INDUSTRIAL USE","code":"59","size": 0},
      {"name": "FABRICS; KNITTED OR CROCHETED","code":"60","size": 0},
      {"name": "APPAREL AND CLOTHING ACCESSORIES; KNITTED OR CROCHETED","code":"61","size": 0},
      {"name": "APPAREL AND CLOTHING ACCESSORIES; NOT KNITTED OR CROCHETED","code":"62","size": 0},
      {"name": "TEXTILES, MADE UP ARTICLES; SETS; WORN CLOTHING AND WORN TEXTILE ARTICLES; RAGS","code":"63","size": 0}

                ]
        },
                {
   "name": "Footwear / Headgear",
   "code":"64-67",
   "children": [
    
      {"name": "FOOTWEAR; GAITERS AND THE LIKE; PARTS OF SUCH ARTICLES","code":"64","size": 0},
      {"name": "HEADGEAR AND PARTS THEREOF","code":"65","size": 0},
      {"name": "UMBRELLAS, SUN UMBRELLAS, WALKING-STICKS, SEAT STICKS, WHIPS, RIDING CROPS; AND PARTS THEREOF","code":"66","size": 0},
      {"name": "FEATHERS AND DOWN, PREPARED; AND ARTICLES MADE OF FEATHER OR OF DOWN; ARTIFICIAL FLOWERS; ARTICLES OF HUMAN HAIR","code":"67","size": 0}

                ]
        },
                {
   "name": "Stone / Glass",
   "code":"68-71",
   "children": [
    
      {"name": "STONE, PLASTER, CEMENT, ASBESTOS, MICA OR SIMILAR MATERIALS; ARTICLES THEREOF","code":"68","size": 0},
      {"name": "CERAMIC PRODUCTS","code":"69","size": 0},
      {"name": "GLASS AND GLASSWARE","code":"70","size": 0},
      {"name": "NATURAL, CULTURED PEARLS; PRECIOUS, SEMI-PRECIOUS STONES; PRECIOUS METALS, METALS CLAD WITH PRECIOUS METAL, AND ARTICLES THEREOF; IMITATION JEWELLERY; COIN","code":"71","size": 0}

                ]
        },
                {
   "name": "Metals",
   "code":"72-83",
   "children": [
    
      {"name": "IRON AND STEEL","code":"72","size": 0},
      {"name": "IRON OR STEEL ARTICLES","code":"73","size": 0},
      {"name": "COPPER AND ARTICLES THEREOF","code":"74","size": 0},
      {"name": "NICKEL AND ARTICLES THEREOF","code":"75","size": 0},
      {"name": "ALUMINIUM AND ARTICLES THEREOF","code":"76","size": 0},
      {"name": "No Names","code":"77","size": 0},
      {"name": "LEAD AND ARTICLES THEREOF","code":"78","size": 0},
      {"name": "ZINC AND ARTICLES THEREOF","code":"79","size": 0},
      {"name": "TIN; ARTICLES THEREOF","code":"80","size": 0},
      {"name": "METALS; N.E.C., CERMETS AND ARTICLES THEREOF","code":"81","size": 0},
      {"name": "TOOLS, IMPLEMENTS, CUTLERY, SPOONS AND FORKS, OF BASE METAL; PARTS THEREOF, OF BASE METAL","code":"82","size": 0},
      {"name": "METAL; MISCELLANEOUS PRODUCTS OF BASE METAL","code":"83","size": 0}

                ]
        },
                {
   "name": "Machinery / Electrical",
   "code":"84-85",
   "children": [
    
      {"name": "NUCLEAR REACTORS, BOILERS, MACHINERY AND MECHANICAL APPLIANCES; PARTS THEREOF","code":"84","size": 0},
      {"name": "ELECTRICAL MACHINERY AND EQUIPMENT AND PARTS THEREOF; SOUND RECORDERS AND REPRODUCERS; TELEVISION IMAGE AND SOUND RECORDERS AND REPRODUCERS, PARTS AND ACCESSORIES OF SUCH ARTICLES","code":"85","size": 0}

                ]
        },
                {
   "name": "Transportation",
   "code":"86-89",
   "children": [
    
      {"name": "AILWAY, TRAMWAY LOCOMOTIVES, ROLLING-STOCK AND PARTS THEREOF; RAILWAY OR TRAMWAY TRACK FIXTURES AND FITTINGS AND PARTS THEREOF; MECHANICAL (INCLUDING ELECTRO-MECHANICAL) TRAFFIC SIGNALLING EQUIPMENT OF ALL KINDS","code":"86","size": 0},
      {"name": "VEHICLES; OTHER THAN RAILWAY OR TRAMWAY ROLLING STOCK, AND PARTS AND ACCESSORIES THEREOF","code":"87","size": 0},
      {"name": "AIRCRAFT, SPACECRAFT AND PARTS THEREOF","code":"88","size": 0},
      {"name": "SHIPS, BOATS AND FLOATING STRUCTURES","code":"89","size": 0}

                ]
        },
                {
   "name": "Miscellaneous",
   "code":"90-97",
   "children": [
    
      {"name": "OPTICAL, PHOTOGRAPHIC, CINEMATOGRAPHIC, MEASURING, CHECKING, MEDICAL OR SURGICAL INSTRUMENTS AND APPARATUS; PARTS AND ACCESSORIES","code":"90","size": 0},
      {"name": "CLOCKS AND WATCHES AND PARTS THEREOF","code":"91","size": 0},
      {"name": "MUSICAL INSTRUMENTS; PARTS AND ACCESSORIES OF SUCH ARTICLES","code":"92","size": 0},
      {"name": "ARMS AND AMMUNITION; PARTS AND ACCESSORIES THEREOF","code":"93","size": 0},
      {"name": "FURNITURE; BEDDING, MATTRESSES, MATTRESS SUPPORTS, CUSHIONS AND SIMILAR STUFFED FURNISHINGS; LAMPS AND LIGHTING FITTINGS, N.E.C.; ILLUMINATED SIGNS, ILLUMINATED NAME-PLATES AND THE LIKE; PREFABRICATED BUILDINGS","code":"94","size": 0},
      {"name": "TOYS, GAMES AND SPORTS REQUISITES; PARTS AND ACCESSORIES THEREOF","code":"95","size": 0},
      {"name": "MISCELLANEOUS MANUFACTURED ARTICLES","code":"96","size": 0},
      {"name": "WORKS OF ART; COLLECTORS' PIECES AND ANTIQUES","code":"97","size": 0}

                ]
        }
  
 ];
	};
	
	nv.bindRangeHsCodeDdl = function()
	{
		var ddl = $("#rangeHsCode");
		$("#hsCode").empty().append(new Option("Select HS Code..",""));
		ddl.empty();
		ddl.append(new Option("Select Category of HS Code..",""));
		hsCodes.forEach(function(e)
					   {
			ddl.append(new Option(e.code  + " : "+e.name, e.code));
		});
	};
	
	nv.onRangeHsCodeChange = function(ddl)
	{
		var selectedRange = $(ddl).val();
		var data = [];
		hsCodes.forEach(function(e)
					   {
			if(e.code === selectedRange)
				{
					data = e.children;
					return false;
				}
		});
		var ddl = $("#hsCode");
		ddl.empty();
		ddl.append(new Option("Select HS Code..",""));
		data.forEach(function(e)
					{
			ddl.append(new Option(e.code + " : "+e.name, e.code));
		});
	};
	
	return nv;
}();