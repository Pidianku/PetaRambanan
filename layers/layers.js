var wms_layers = [];


        var lyr_BASEMAPCarto_0 = new ol.layer.Tile({
            'title': 'BASE MAP - Carto',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_ADMINISTRASI_FIXEDRW_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_FIXEDRW_1 = format_ADMINISTRASI_FIXEDRW_1.readFeatures(json_ADMINISTRASI_FIXEDRW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_FIXEDRW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_FIXEDRW_1.addFeatures(features_ADMINISTRASI_FIXEDRW_1);
var lyr_ADMINISTRASI_FIXEDRW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_FIXEDRW_1, 
                style: style_ADMINISTRASI_FIXEDRW_1,
                popuplayertitle: "-- ADMINISTRASI_FIXED — RW",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_FIXEDRW_1.png" /> -- ADMINISTRASI_FIXED — RW'
            });
var format_ADMPetogogan_2 = new ol.format.GeoJSON();
var features_ADMPetogogan_2 = format_ADMPetogogan_2.readFeatures(json_ADMPetogogan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMPetogogan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMPetogogan_2.addFeatures(features_ADMPetogogan_2);
var lyr_ADMPetogogan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMPetogogan_2, 
                style: style_ADMPetogogan_2,
                popuplayertitle: "ADM - Petogogan",
                interactive: true,
                title: 'ADM - Petogogan'
            });
var format_BUILDINGBASE_3 = new ol.format.GeoJSON();
var features_BUILDINGBASE_3 = format_BUILDINGBASE_3.readFeatures(json_BUILDINGBASE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGBASE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGBASE_3.addFeatures(features_BUILDINGBASE_3);
var lyr_BUILDINGBASE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGBASE_3, 
                style: style_BUILDINGBASE_3,
                popuplayertitle: "BUILDING BASE",
                interactive: false,
                title: '<img src="styles/legend/BUILDINGBASE_3.png" /> BUILDING BASE'
            });
var format_KECAMATANZONASIBlack_4 = new ol.format.GeoJSON();
var features_KECAMATANZONASIBlack_4 = format_KECAMATANZONASIBlack_4.readFeatures(json_KECAMATANZONASIBlack_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATANZONASIBlack_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATANZONASIBlack_4.addFeatures(features_KECAMATANZONASIBlack_4);
var lyr_KECAMATANZONASIBlack_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATANZONASIBlack_4, 
                style: style_KECAMATANZONASIBlack_4,
                popuplayertitle: "KECAMATAN - ZONASI - Black",
                interactive: true,
                title: '<img src="styles/legend/KECAMATANZONASIBlack_4.png" /> KECAMATAN - ZONASI - Black'
            });
var format_BUILDINGBYZONE_5 = new ol.format.GeoJSON();
var features_BUILDINGBYZONE_5 = format_BUILDINGBYZONE_5.readFeatures(json_BUILDINGBYZONE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGBYZONE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGBYZONE_5.addFeatures(features_BUILDINGBYZONE_5);
var lyr_BUILDINGBYZONE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDINGBYZONE_5, 
                style: style_BUILDINGBYZONE_5,
                popuplayertitle: "BUILDING BY ZONE",
                interactive: true,
    title: 'BUILDING BY ZONE<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_0.png" /> HUNIAN<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_1.png" /> KEAGAMAAN<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_2.png" /> KHUSUS<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_3.png" /> PENGGUNAAN LAIN<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_4.png" /> SOSIAL BUDAYA<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_5.png" /> USAHA<br />\
    <img src="styles/legend/BUILDINGBYZONE_5_6.png" /> <br />'
        });
var format_Photos_6 = new ol.format.GeoJSON();
var features_Photos_6 = format_Photos_6.readFeatures(json_Photos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_6.addFeatures(features_Photos_6);
var lyr_Photos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_6, 
                style: style_Photos_6,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_6.png" /> Photos'
            });
var format_PedestrianTraffic_7 = new ol.format.GeoJSON();
var features_PedestrianTraffic_7 = format_PedestrianTraffic_7.readFeatures(json_PedestrianTraffic_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrianTraffic_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrianTraffic_7.addFeatures(features_PedestrianTraffic_7);
var lyr_PedestrianTraffic_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PedestrianTraffic_7, 
                style: style_PedestrianTraffic_7,
                popuplayertitle: "Pedestrian Traffic",
                interactive: false,
    title: 'Pedestrian Traffic<br />\
    <img src="styles/legend/PedestrianTraffic_7_0.png" /> 0 - 97<br />\
    <img src="styles/legend/PedestrianTraffic_7_1.png" /> 97 - 337<br />\
    <img src="styles/legend/PedestrianTraffic_7_2.png" /> 337 - 681<br />\
    <img src="styles/legend/PedestrianTraffic_7_3.png" /> 681 - 1282<br />\
    <img src="styles/legend/PedestrianTraffic_7_4.png" /> 1282 - 4336<br />'
        });
var format_GreenViewIndex_8 = new ol.format.GeoJSON();
var features_GreenViewIndex_8 = format_GreenViewIndex_8.readFeatures(json_GreenViewIndex_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenViewIndex_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenViewIndex_8.addFeatures(features_GreenViewIndex_8);
var lyr_GreenViewIndex_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenViewIndex_8, 
                style: style_GreenViewIndex_8,
                popuplayertitle: "Green View Index",
                interactive: false,
    title: 'Green View Index<br />\
    <img src="styles/legend/GreenViewIndex_8_0.png" /> 0 - 0.431<br />\
    <img src="styles/legend/GreenViewIndex_8_1.png" /> 0.431 - 0.511<br />\
    <img src="styles/legend/GreenViewIndex_8_2.png" /> 0.511 - 0.569<br />\
    <img src="styles/legend/GreenViewIndex_8_3.png" /> 0.569 - 0.627<br />\
    <img src="styles/legend/GreenViewIndex_8_4.png" /> 0.627 - 0.839<br />'
        });
var format_TitikHalte_9 = new ol.format.GeoJSON();
var features_TitikHalte_9 = format_TitikHalte_9.readFeatures(json_TitikHalte_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikHalte_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikHalte_9.addFeatures(features_TitikHalte_9);
var lyr_TitikHalte_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikHalte_9, 
                style: style_TitikHalte_9,
                popuplayertitle: "Titik Halte",
                interactive: true,
                title: '<img src="styles/legend/TitikHalte_9.png" /> Titik Halte'
            });
var group_ANALYSIS = new ol.layer.Group({
                                layers: [lyr_PedestrianTraffic_7,lyr_GreenViewIndex_8,],
                                fold: "open",
                                title: "ANALYSIS"});
var group_PHOTO = new ol.layer.Group({
                                layers: [lyr_Photos_6,],
                                fold: "open",
                                title: "PHOTO"});
var group_BUILDING = new ol.layer.Group({
                                layers: [lyr_BUILDINGBYZONE_5,],
                                fold: "open",
                                title: "BUILDING"});
var group_Network = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Network"});
var group_LANDUSE = new ol.layer.Group({
                                layers: [lyr_KECAMATANZONASIBlack_4,],
                                fold: "open",
                                title: "LANDUSE"});
var group_ADMINISTRATIVE = new ol.layer.Group({
                                layers: [lyr_ADMINISTRASI_FIXEDRW_1,],
                                fold: "open",
                                title: "ADMINISTRATIVE"});

lyr_BASEMAPCarto_0.setVisible(true);lyr_ADMINISTRASI_FIXEDRW_1.setVisible(false);lyr_ADMPetogogan_2.setVisible(false);lyr_BUILDINGBASE_3.setVisible(true);lyr_KECAMATANZONASIBlack_4.setVisible(false);lyr_BUILDINGBYZONE_5.setVisible(false);lyr_Photos_6.setVisible(false);lyr_PedestrianTraffic_7.setVisible(true);lyr_GreenViewIndex_8.setVisible(true);lyr_TitikHalte_9.setVisible(true);
var layersList = [lyr_BASEMAPCarto_0,group_ADMINISTRATIVE,lyr_ADMPetogogan_2,lyr_BUILDINGBASE_3,group_LANDUSE,group_BUILDING,group_PHOTO,group_ANALYSIS,lyr_TitikHalte_9];
lyr_ADMINISTRASI_FIXEDRW_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'KDFPUM': 'KDFPUM', 'WADMRW': 'WADMRW', });
lyr_ADMPetogogan_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BUILDINGBASE_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'join_count': 'join_count', 'target_fid': 'target_fid', 'nambang': 'nambang', 'no_bang': 'no_bang', 'alamat': 'alamat', 'wadmrt': 'wadmrt', 'wadmrw': 'wadmrw', 'wadmkd': 'wadmkd', 'wadmkc': 'wadmkc', 'wadmkk': 'wadmkk', 'jenbang': 'jenbang', 'bangtgg': 'bangtgg', 'penggunaan': 'penggunaan', 'fungsi': 'fungsi', 'tingkatan': 'tingkatan', 'jenbang_2': 'jenbang_2', 'sumber': 'sumber', 'kodbang': 'kodbang', 'jmllnt': 'jmllnt', 'luasbang': 'luasbang', 'jmlbsm': 'jmlbsm', 'namobj': 'namobj', 'luasha': 'luasha', 'kdb': 'kdb', 'klb': 'klb', 'ktb': 'ktb', 'kdh': 'kdh', 'pstddev': 'pstddev', 'stddev': 'stddev', 'mean': 'mean', 'min_': 'min_', 'max_': 'max_', 'nozone': 'nozone', 'rpbulat': 'rpbulat', 'shape_leng': 'shape_leng', 'd_pengguna': 'd_pengguna', 'd_sub_peng': 'd_sub_peng', 'd_kegiatan': 'd_kegiatan', 'banjir': 'banjir', 'tahun': 'tahun', 'tinggi_gen': 'tinggi_gen', 'penyebab_b': 'penyebab_b', 'kategori_b': 'kategori_b', 'b_sekolah': 'b_sekolah', 'b_faskes': 'b_faskes', 'wilayah': 'wilayah', 'kecamatan': 'kecamatan', 'kelurahan': 'kelurahan', 'kd_adm': 'kd_adm', 'kd_kec': 'kd_kec', 'kd_wil': 'kd_wil', 'luas_polyg': 'luas_polyg', 'x': 'x', 'y': 'y', 'lokasi': 'lokasi', 'nama_bangu': 'nama_bangu', 'lapis': 'lapis', 'kegiatan': 'kegiatan', 'pengelola_': 'pengelola_', 'email': 'email', 'pengelola1': 'pengelola1', 'keterangan': 'keterangan', 'jenis_bang': 'jenis_bang', 'petugas': 'petugas', 'verifikasi': 'verifikasi', 'petugas_v': 'petugas_v', 'kode_bangu': 'kode_bangu', 'shape__are': 'shape__are', 'shape__len': 'shape__len', 'lokasi_kaw': 'lokasi_kaw', 'orig_fid': 'orig_fid', 'skor_rdtr': 'skor_rdtr', 'skor_znt': 'skor_znt', 'skor_banji': 'skor_banji', 'skor_sklh': 'skor_sklh', 'skor_fk': 'skor_fk', 'skor_iuts': 'skor_iuts', 'b_iuts': 'b_iuts', 'skor_total': 'skor_total', 'skor_tot_1': 'skor_tot_1', 'lt_banguna': 'lt_banguna', 'SHAPE__L_1': 'SHAPE__L_1', 'SHAPE__A_1': 'SHAPE__A_1', 'Area': 'Area', });
lyr_KECAMATANZONASIBlack_4.set('fieldAliases', {'AREA': 'AREA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'KODE_BLOK': 'KODE_BLOK', 'SUB_BLOK': 'SUB_BLOK', 'SUB_ZONA': 'SUB_ZONA', 'TPZ': 'TPZ', 'CD_TPZ': 'CD_TPZ', 'ID_SUBBLOK': 'ID_SUBBLOK', 'ZONA': 'ZONA', 'PSL': 'PSL', 'NAMA_PROV': 'NAMA_PROV', 'NAMA_KOTA': 'NAMA_KOTA', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_KEL': 'NAMA_KEL', 'KODE_OPS_B': 'KODE_OPS_B', 'KDB': 'KDB', 'KLB': 'KLB', 'KB': 'KB', 'KDH': 'KDH', 'KTB': 'KTB', 'TIPE': 'TIPE', 'BERSYARAT': 'BERSYARAT', 'DIIZINKAN': 'DIIZINKAN', 'TERBATAS': 'TERBATAS', 'TERBATAS_B': 'TERBATAS_B', 'layer': 'layer', 'path': 'path', 'Area_m2': 'Area_m2', });
lyr_BUILDINGBYZONE_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'join_count': 'join_count', 'target_fid': 'target_fid', 'nambang': 'nambang', 'no_bang': 'no_bang', 'alamat': 'alamat', 'wadmrt': 'wadmrt', 'wadmrw': 'wadmrw', 'wadmkd': 'wadmkd', 'wadmkc': 'wadmkc', 'wadmkk': 'wadmkk', 'jenbang': 'jenbang', 'bangtgg': 'bangtgg', 'penggunaan': 'penggunaan', 'fungsi': 'fungsi', 'tingkatan': 'tingkatan', 'jenbang_2': 'jenbang_2', 'sumber': 'sumber', 'kodbang': 'kodbang', 'jmllnt': 'jmllnt', 'luasbang': 'luasbang', 'jmlbsm': 'jmlbsm', 'namobj': 'namobj', 'luasha': 'luasha', 'kdb': 'kdb', 'klb': 'klb', 'ktb': 'ktb', 'kdh': 'kdh', 'pstddev': 'pstddev', 'stddev': 'stddev', 'mean': 'mean', 'min_': 'min_', 'max_': 'max_', 'nozone': 'nozone', 'rpbulat': 'rpbulat', 'shape_leng': 'shape_leng', 'd_pengguna': 'd_pengguna', 'd_sub_peng': 'd_sub_peng', 'd_kegiatan': 'd_kegiatan', 'banjir': 'banjir', 'tahun': 'tahun', 'tinggi_gen': 'tinggi_gen', 'penyebab_b': 'penyebab_b', 'kategori_b': 'kategori_b', 'b_sekolah': 'b_sekolah', 'b_faskes': 'b_faskes', 'wilayah': 'wilayah', 'kecamatan': 'kecamatan', 'kelurahan': 'kelurahan', 'kd_adm': 'kd_adm', 'kd_kec': 'kd_kec', 'kd_wil': 'kd_wil', 'luas_polyg': 'luas_polyg', 'x': 'x', 'y': 'y', 'lokasi': 'lokasi', 'nama_bangu': 'nama_bangu', 'lapis': 'lapis', 'kegiatan': 'kegiatan', 'pengelola_': 'pengelola_', 'email': 'email', 'pengelola1': 'pengelola1', 'keterangan': 'keterangan', 'jenis_bang': 'jenis_bang', 'petugas': 'petugas', 'verifikasi': 'verifikasi', 'petugas_v': 'petugas_v', 'kode_bangu': 'kode_bangu', 'shape__are': 'shape__are', 'shape__len': 'shape__len', 'lokasi_kaw': 'lokasi_kaw', 'orig_fid': 'orig_fid', 'skor_rdtr': 'skor_rdtr', 'skor_znt': 'skor_znt', 'skor_banji': 'skor_banji', 'skor_sklh': 'skor_sklh', 'skor_fk': 'skor_fk', 'skor_iuts': 'skor_iuts', 'b_iuts': 'b_iuts', 'skor_total': 'skor_total', 'skor_tot_1': 'skor_tot_1', 'lt_banguna': 'lt_banguna', 'SHAPE__L_1': 'SHAPE__L_1', 'SHAPE__A_1': 'SHAPE__A_1', 'Area': 'Area', });
lyr_Photos_6.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_PedestrianTraffic_7.set('fieldAliases', {'fid': 'fid', 'Btwn': 'Btwn', 'Btwn_': 'Btwn_', });
lyr_GreenViewIndex_8.set('fieldAliases', {'random_poi': 'random_poi', 'GVI': 'GVI', 'GVI_': 'GVI_', });
lyr_TitikHalte_9.set('fieldAliases', {'FID': 'FID', });
lyr_ADMINISTRASI_FIXEDRW_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KDFPUM': 'TextEdit', 'WADMRW': 'TextEdit', });
lyr_ADMPetogogan_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BUILDINGBASE_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'join_count': 'TextEdit', 'target_fid': 'TextEdit', 'nambang': 'TextEdit', 'no_bang': 'TextEdit', 'alamat': 'TextEdit', 'wadmrt': 'TextEdit', 'wadmrw': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkk': 'TextEdit', 'jenbang': 'TextEdit', 'bangtgg': 'TextEdit', 'penggunaan': 'TextEdit', 'fungsi': 'TextEdit', 'tingkatan': 'TextEdit', 'jenbang_2': 'TextEdit', 'sumber': 'TextEdit', 'kodbang': 'TextEdit', 'jmllnt': 'TextEdit', 'luasbang': 'TextEdit', 'jmlbsm': 'TextEdit', 'namobj': 'TextEdit', 'luasha': 'TextEdit', 'kdb': 'TextEdit', 'klb': 'TextEdit', 'ktb': 'TextEdit', 'kdh': 'TextEdit', 'pstddev': 'TextEdit', 'stddev': 'TextEdit', 'mean': 'TextEdit', 'min_': 'TextEdit', 'max_': 'TextEdit', 'nozone': 'TextEdit', 'rpbulat': 'TextEdit', 'shape_leng': 'TextEdit', 'd_pengguna': 'TextEdit', 'd_sub_peng': 'TextEdit', 'd_kegiatan': 'TextEdit', 'banjir': 'TextEdit', 'tahun': 'TextEdit', 'tinggi_gen': 'TextEdit', 'penyebab_b': 'TextEdit', 'kategori_b': 'TextEdit', 'b_sekolah': 'TextEdit', 'b_faskes': 'TextEdit', 'wilayah': 'TextEdit', 'kecamatan': 'TextEdit', 'kelurahan': 'TextEdit', 'kd_adm': 'TextEdit', 'kd_kec': 'TextEdit', 'kd_wil': 'TextEdit', 'luas_polyg': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lokasi': 'TextEdit', 'nama_bangu': 'TextEdit', 'lapis': 'TextEdit', 'kegiatan': 'TextEdit', 'pengelola_': 'TextEdit', 'email': 'TextEdit', 'pengelola1': 'TextEdit', 'keterangan': 'TextEdit', 'jenis_bang': 'TextEdit', 'petugas': 'TextEdit', 'verifikasi': 'TextEdit', 'petugas_v': 'TextEdit', 'kode_bangu': 'TextEdit', 'shape__are': 'TextEdit', 'shape__len': 'TextEdit', 'lokasi_kaw': 'TextEdit', 'orig_fid': 'TextEdit', 'skor_rdtr': 'TextEdit', 'skor_znt': 'TextEdit', 'skor_banji': 'TextEdit', 'skor_sklh': 'TextEdit', 'skor_fk': 'TextEdit', 'skor_iuts': 'TextEdit', 'b_iuts': 'TextEdit', 'skor_total': 'TextEdit', 'skor_tot_1': 'TextEdit', 'lt_banguna': 'TextEdit', 'SHAPE__L_1': 'TextEdit', 'SHAPE__A_1': 'TextEdit', 'Area': '', });
lyr_KECAMATANZONASIBlack_4.set('fieldImages', {'AREA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KODE_BLOK': 'TextEdit', 'SUB_BLOK': 'TextEdit', 'SUB_ZONA': 'TextEdit', 'TPZ': 'TextEdit', 'CD_TPZ': 'TextEdit', 'ID_SUBBLOK': 'TextEdit', 'ZONA': 'TextEdit', 'PSL': 'TextEdit', 'NAMA_PROV': 'TextEdit', 'NAMA_KOTA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KEL': 'TextEdit', 'KODE_OPS_B': 'TextEdit', 'KDB': 'TextEdit', 'KLB': 'TextEdit', 'KB': 'TextEdit', 'KDH': 'TextEdit', 'KTB': 'TextEdit', 'TIPE': 'TextEdit', 'BERSYARAT': 'TextEdit', 'DIIZINKAN': 'TextEdit', 'TERBATAS': 'TextEdit', 'TERBATAS_B': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Area_m2': 'Range', });
lyr_BUILDINGBYZONE_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'join_count': 'TextEdit', 'target_fid': 'TextEdit', 'nambang': 'TextEdit', 'no_bang': 'TextEdit', 'alamat': 'TextEdit', 'wadmrt': 'TextEdit', 'wadmrw': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkk': 'TextEdit', 'jenbang': 'TextEdit', 'bangtgg': 'TextEdit', 'penggunaan': 'TextEdit', 'fungsi': 'TextEdit', 'tingkatan': 'TextEdit', 'jenbang_2': 'TextEdit', 'sumber': 'TextEdit', 'kodbang': 'TextEdit', 'jmllnt': 'TextEdit', 'luasbang': 'TextEdit', 'jmlbsm': 'TextEdit', 'namobj': 'TextEdit', 'luasha': 'TextEdit', 'kdb': 'TextEdit', 'klb': 'TextEdit', 'ktb': 'TextEdit', 'kdh': 'TextEdit', 'pstddev': 'TextEdit', 'stddev': 'TextEdit', 'mean': 'TextEdit', 'min_': 'TextEdit', 'max_': 'TextEdit', 'nozone': 'TextEdit', 'rpbulat': 'TextEdit', 'shape_leng': 'TextEdit', 'd_pengguna': 'TextEdit', 'd_sub_peng': 'TextEdit', 'd_kegiatan': 'TextEdit', 'banjir': 'TextEdit', 'tahun': 'TextEdit', 'tinggi_gen': 'TextEdit', 'penyebab_b': 'TextEdit', 'kategori_b': 'TextEdit', 'b_sekolah': 'TextEdit', 'b_faskes': 'TextEdit', 'wilayah': 'TextEdit', 'kecamatan': 'TextEdit', 'kelurahan': 'TextEdit', 'kd_adm': 'TextEdit', 'kd_kec': 'TextEdit', 'kd_wil': 'TextEdit', 'luas_polyg': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lokasi': 'TextEdit', 'nama_bangu': 'TextEdit', 'lapis': 'TextEdit', 'kegiatan': 'TextEdit', 'pengelola_': 'TextEdit', 'email': 'TextEdit', 'pengelola1': 'TextEdit', 'keterangan': 'TextEdit', 'jenis_bang': 'TextEdit', 'petugas': 'TextEdit', 'verifikasi': 'TextEdit', 'petugas_v': 'TextEdit', 'kode_bangu': 'TextEdit', 'shape__are': 'TextEdit', 'shape__len': 'TextEdit', 'lokasi_kaw': 'TextEdit', 'orig_fid': 'TextEdit', 'skor_rdtr': 'TextEdit', 'skor_znt': 'TextEdit', 'skor_banji': 'TextEdit', 'skor_sklh': 'TextEdit', 'skor_fk': 'TextEdit', 'skor_iuts': 'TextEdit', 'b_iuts': 'TextEdit', 'skor_total': 'TextEdit', 'skor_tot_1': 'TextEdit', 'lt_banguna': 'TextEdit', 'SHAPE__L_1': 'TextEdit', 'SHAPE__A_1': 'TextEdit', 'Area': '', });
lyr_Photos_6.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_PedestrianTraffic_7.set('fieldImages', {'fid': 'TextEdit', 'Btwn': 'TextEdit', 'Btwn_': 'Range', });
lyr_GreenViewIndex_8.set('fieldImages', {'random_poi': 'TextEdit', 'GVI': 'TextEdit', 'GVI_': 'TextEdit', });
lyr_TitikHalte_9.set('fieldImages', {'FID': 'TextEdit', });
lyr_ADMINISTRASI_FIXEDRW_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'KDFPUM': 'no label', 'WADMRW': 'no label', });
lyr_ADMPetogogan_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BUILDINGBASE_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'join_count': 'no label', 'target_fid': 'no label', 'nambang': 'no label', 'no_bang': 'no label', 'alamat': 'no label', 'wadmrt': 'no label', 'wadmrw': 'no label', 'wadmkd': 'no label', 'wadmkc': 'no label', 'wadmkk': 'no label', 'jenbang': 'no label', 'bangtgg': 'no label', 'penggunaan': 'no label', 'fungsi': 'no label', 'tingkatan': 'no label', 'jenbang_2': 'no label', 'sumber': 'no label', 'kodbang': 'no label', 'jmllnt': 'no label', 'luasbang': 'no label', 'jmlbsm': 'no label', 'namobj': 'no label', 'luasha': 'no label', 'kdb': 'no label', 'klb': 'no label', 'ktb': 'no label', 'kdh': 'no label', 'pstddev': 'no label', 'stddev': 'no label', 'mean': 'no label', 'min_': 'no label', 'max_': 'no label', 'nozone': 'no label', 'rpbulat': 'no label', 'shape_leng': 'no label', 'd_pengguna': 'no label', 'd_sub_peng': 'no label', 'd_kegiatan': 'header label - always visible', 'banjir': 'header label - always visible', 'tahun': 'no label', 'tinggi_gen': 'no label', 'penyebab_b': 'no label', 'kategori_b': 'no label', 'b_sekolah': 'no label', 'b_faskes': 'no label', 'wilayah': 'no label', 'kecamatan': 'no label', 'kelurahan': 'no label', 'kd_adm': 'no label', 'kd_kec': 'no label', 'kd_wil': 'no label', 'luas_polyg': 'no label', 'x': 'no label', 'y': 'no label', 'lokasi': 'no label', 'nama_bangu': 'no label', 'lapis': 'no label', 'kegiatan': 'no label', 'pengelola_': 'no label', 'email': 'no label', 'pengelola1': 'no label', 'keterangan': 'no label', 'jenis_bang': 'no label', 'petugas': 'no label', 'verifikasi': 'no label', 'petugas_v': 'no label', 'kode_bangu': 'no label', 'shape__are': 'no label', 'shape__len': 'no label', 'lokasi_kaw': 'no label', 'orig_fid': 'no label', 'skor_rdtr': 'no label', 'skor_znt': 'no label', 'skor_banji': 'no label', 'skor_sklh': 'no label', 'skor_fk': 'no label', 'skor_iuts': 'no label', 'b_iuts': 'no label', 'skor_total': 'no label', 'skor_tot_1': 'no label', 'lt_banguna': 'no label', 'SHAPE__L_1': 'no label', 'SHAPE__A_1': 'no label', 'Area': 'no label', });
lyr_KECAMATANZONASIBlack_4.set('fieldLabels', {'AREA': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'KODE_BLOK': 'no label', 'SUB_BLOK': 'no label', 'SUB_ZONA': 'no label', 'TPZ': 'no label', 'CD_TPZ': 'no label', 'ID_SUBBLOK': 'no label', 'ZONA': 'inline label - visible with data', 'PSL': 'no label', 'NAMA_PROV': 'no label', 'NAMA_KOTA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KEL': 'no label', 'KODE_OPS_B': 'no label', 'KDB': 'no label', 'KLB': 'no label', 'KB': 'no label', 'KDH': 'no label', 'KTB': 'no label', 'TIPE': 'no label', 'BERSYARAT': 'no label', 'DIIZINKAN': 'no label', 'TERBATAS': 'no label', 'TERBATAS_B': 'no label', 'layer': 'no label', 'path': 'no label', 'Area_m2': 'inline label - always visible', });
lyr_BUILDINGBYZONE_5.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'join_count': 'no label', 'target_fid': 'no label', 'nambang': 'no label', 'no_bang': 'no label', 'alamat': 'no label', 'wadmrt': 'no label', 'wadmrw': 'no label', 'wadmkd': 'no label', 'wadmkc': 'no label', 'wadmkk': 'no label', 'jenbang': 'no label', 'bangtgg': 'no label', 'penggunaan': 'no label', 'fungsi': 'no label', 'tingkatan': 'no label', 'jenbang_2': 'no label', 'sumber': 'no label', 'kodbang': 'no label', 'jmllnt': 'no label', 'luasbang': 'no label', 'jmlbsm': 'no label', 'namobj': 'no label', 'luasha': 'no label', 'kdb': 'no label', 'klb': 'no label', 'ktb': 'no label', 'kdh': 'no label', 'pstddev': 'no label', 'stddev': 'no label', 'mean': 'no label', 'min_': 'no label', 'max_': 'no label', 'nozone': 'no label', 'rpbulat': 'no label', 'shape_leng': 'no label', 'd_pengguna': 'no label', 'd_sub_peng': 'no label', 'd_kegiatan': 'header label - always visible', 'banjir': 'header label - always visible', 'tahun': 'no label', 'tinggi_gen': 'no label', 'penyebab_b': 'no label', 'kategori_b': 'no label', 'b_sekolah': 'no label', 'b_faskes': 'no label', 'wilayah': 'no label', 'kecamatan': 'no label', 'kelurahan': 'no label', 'kd_adm': 'no label', 'kd_kec': 'no label', 'kd_wil': 'no label', 'luas_polyg': 'no label', 'x': 'no label', 'y': 'no label', 'lokasi': 'no label', 'nama_bangu': 'no label', 'lapis': 'no label', 'kegiatan': 'no label', 'pengelola_': 'no label', 'email': 'no label', 'pengelola1': 'no label', 'keterangan': 'no label', 'jenis_bang': 'no label', 'petugas': 'no label', 'verifikasi': 'no label', 'petugas_v': 'no label', 'kode_bangu': 'no label', 'shape__are': 'no label', 'shape__len': 'no label', 'lokasi_kaw': 'no label', 'orig_fid': 'no label', 'skor_rdtr': 'no label', 'skor_znt': 'no label', 'skor_banji': 'no label', 'skor_sklh': 'no label', 'skor_fk': 'no label', 'skor_iuts': 'no label', 'b_iuts': 'no label', 'skor_total': 'no label', 'skor_tot_1': 'no label', 'lt_banguna': 'no label', 'SHAPE__L_1': 'no label', 'SHAPE__A_1': 'no label', 'Area': 'no label', });
lyr_Photos_6.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_PedestrianTraffic_7.set('fieldLabels', {'fid': 'no label', 'Btwn': 'no label', 'Btwn_': 'no label', });
lyr_GreenViewIndex_8.set('fieldLabels', {'random_poi': 'no label', 'GVI': 'no label', 'GVI_': 'no label', });
lyr_TitikHalte_9.set('fieldLabels', {'FID': 'no label', });
lyr_TitikHalte_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});