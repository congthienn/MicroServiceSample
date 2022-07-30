# MicroServiceSample

* Steps to take to run the project

	Step 1: Set startup project: 

		      Multiple startup projects : APIGateway - IdentityAPI - BasketAPI  - CatalogAPI - OrderingAPI - WebMVC 

	Step 2: Download and install docker : https://docs.docker.com/desktop/windows/install/

	Step 3: Build cache - setting up Redis in Docker Link: 

			- https://www.c-sharpcorner.com/article/caching-mechanism-in-asp-net-core/
			- https://medium.com/idomongodb/installing-redis-server-using-docker-container-453c3cfffbdf
				
				Step 1: Start Docker
				Step 2: Pull docker Redis image from docker hub: docker pull redis
				Step 3: Run redis: docker run --name Basketdata -p 6379:6379 -d redis (6379:6379 can change)
				Step 4: Start the container: docker start Basketdata (Check by command: docker ps)

	Step 4: Build rabbitmq:

		- Can choose 1 of 2 ways:
			1. Build rabbitmq in Docker

				ESHOP_SUSERNAME=rabbit
				ESHOP_SERVICE_BUS_PASSWORD=rabbitp

				Step 1: Start Docker
				Step 2: docker pull rabbitmq:3-management
				Step 3: docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management

			2. Build rabbitmq in Windows

				Step 1: Download Erlang and Rabbitmq (https://www.rabbitmq.com/install-windows.html)
				Step 2: Open RabbitMQ Command Prompt 
				Step 3: Run command: rabbitmq-plugins enable rabbitmq_management
				Step 4: Access link: http://localhost:15672/ (Username: guest - Password: guest)

	Step 5: Create database: 

				- eShopOnContainer.Services.Catalog
				- eShopOnContainer.Services.Identity
                       	- eShopOnContainer.Services.Ordering
				- Change the connectionstring in the files appsetting.json or appsettings.Development.json in folder CatalogAPI - OrderingAPI - IdentityAPI

* Note: UserId demo : 42b1459c-cbff-4af9-87a2-a6952f69d0b7
