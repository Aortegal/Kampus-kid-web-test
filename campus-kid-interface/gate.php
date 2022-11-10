<?php

require_once "vendor/econea/nusoap/src/nusoap.php";
$nombres=["ingles_bc","filosofia_bc","calculo_bc","castellano_bc"];
$description=["ingles de broken campus", "filosofia de broken campus", "calculo de broken campus", "castellano de broken campus"];
$namespace = "miSuperSoap2022.com";
$server = new soap_server();
$server->configureWSDL("SoapBrokenCampus", $namespace);
$server->wsdl->schemaTargetNamespace = $namespace;

$server->wsdl->addComplexType(
    'buscarMateria',
    'complexType',
    'struct',
    'all',
    '',
    array(
        'IdMateria' => array('name' => 'NumeroOrden', 'type' => 'xsd:integer'),
    )
);

$server->wsdl->addComplexType(
    'response',
    'complexType',
    'struct',
    'all',
    '',
    array(
        'NumeroDeMateria' => array('name' => 'NumeroDeMateria', 'type' => 'xsd:integer'),
        'Resultado' => array('name' => 'Resultado', 'type' => 'xsd:boolean')
    )
);

$server->register(
    'MostrarMateria',
    array('name' => 'tns:buscarMateria'),
    array('name' => 'tns:response'),
    $namespace,
    false,
    'rpc',
    'encoded',
    'Recibe una id de materia y regresa nombre y descripcion'
);

function MostrarMateria($request)
{
    $nombres = ["ingles_bc", "filosofia_bc", "calculo_bc", "castellano_bc"];
    $description = ["ingles de broken campus", "filosofia de broken campus", "calculo de broken campus", "castellano de broken campus"];
    return array(
        "NumeroDeMateria" => "La materia con id: " . $request["IdMateria"]%3 . " posee el nombre:".$nombres[$request["IdMateria"]%3]." y la descripcion:".$description[$request["IdMateria"]%3]." ",
        "Resultado" => true
    );
}

$POST_DATA = file_get_contents("php://input");
$server->service($POST_DATA);
exit();
