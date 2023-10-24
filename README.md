## Ejercicio 1
Desplegar una aplicación simple hecha en Java, la cual se despliegue a través de un recurso de tipo Deployment y gestione 5 replicas de esa aplicación. Además, la aplicación debería de tener un servicio de tipo ClusterIP para exponer la app.
Adicional a eso, crear un healtcheck de tipo livenessprobe para la aplicación. El healtcheck es libre. 

## Ejercicio 2
Desplegar una aplicación simple hecha en Python, la cual se despliegue a través de un recurso de tipo ReplicaSet y gestione 4 replicas de esa aplicación. Además, la aplicación debería de tener un servicio de tipo NodePort para exponer la app.
Adicional a eso, crear un healtcheck de tipo Readinessprobe para la aplicación. El healtcheck es libre. 

## Ejercicio 3
Desplegar una aplicación simple hecha en NodeJS, la cual se despliegue a través de un recurso de tipo ReplicationController y gestione 6 replicas de esa aplicación. Además, la aplicación debería de tener un servicio de tipo LoadBalancer para exponer la app.
Adicional a eso, crear un healtcheck de tipo Readinessprobe para la aplicación. El healtcheck es libre. 

## Ejercicio 4
Desplegar una aplicación simple hosteada en Nginx, la cual se despliegue a través de un recurso de tipo DaemonSet y gestione 3 replicas de esa aplicación. Además, la aplicación debería de tener un servicio de tipo ClusterIP para exponer la app.
Adicional a eso, crear un healtcheck de tipo LivenessProbe para la aplicación. El healtcheck es libre. 

## Ejercicio 5
Desplegar una aplicación simple hecha en Golang, la cual se despliegue a través de un recurso de tipo Deployment y gestione 5 replicas de esa aplicación. Además, la aplicación debería de tener un servicio de tipo ClusterIP para exponer la app.
Adicional a eso, crear un healtcheck de tipo livenessprobe para la aplicación. El healtcheck es libre.

Cada ejercicio debe de ser desplegado en un namespace que contenga el nombre del estudiante. Adicionalmente, para validar que la app funciona se le va a solicitar al estudiante crear un POD de ubuntu el cual haga request a la aplicación a través del DNS que proporciona el servicio asociado a esa app. 


Saludos y que la suerte los acompañe.


## How to run?

1. docker build -t gonzalodevarona/simple
2. kubectl apply -f deploy.yml
