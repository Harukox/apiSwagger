//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =
{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API con  Firulais y michis",
            contact: {
                name: "Sara",
                email: "tirmaNoEsUnGateteEsUnPerrete@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/perretes": {
                get: {
                    summary: "Devuelve un firulais de la lista de perretes a adoptar",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "lista de firulais.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Toffee"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Añade un firulais", 
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "vas a añadir un perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "message": "Vas a añadir un perrete"
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/perretes/{id}": {
                get: {
                    summary: "Devuelve un firulais",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de firulais ",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Bulma"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Actualiza un firulais",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del firulais a actualizar", 
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "firulais actualizados.", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a actualizar el perrete con id 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Quita un firulais :(",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del firulais a quitar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un unico firulais.", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a borrar el perrete con id  1  por desgracia ya no esta'"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/gatetes": {
                get: {
                    summary: "Devuelve todos los gatetes disponibles para adoptar",   
                    tags: [
                        "gatetes"
                    ],
                    responses: {
                        200: {
                            description: "Una lista de los michis lindos",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Kamisi"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Añade un michifu", 
                    tags: [
                        "gatetes"
                    ],
                    responses: {
                        200: {
                            description: "vas a añadir un gatete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "message": "Vas a añadir un gatete"
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/gatetes/{id}": {
                get: {
                    summary: "Devulve un michi del sistema al usuario quiere adoptar",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del gatete a devolver",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un michi lindo", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Coco"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Actualiza un michi",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del michi a actualizar", 
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "michi actualizados.", 
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a actualizar el gatete con id 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Borra un gatete de la lista de adopciones :(",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID  del michi a eliminar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "un michi ",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Vas a borrar el gatete con id 1"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en https://localhost:${port}/api/docs`);
}

module.exports = { swaggerDocs };
