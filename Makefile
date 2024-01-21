up-bg:
	docker-compose -f docker-compose.dev.yml up -d

up:
	docker-compose -f docker-compose.dev.yml up

kill:
	docker-compose  -f docker-compose.dev.yml kill

build:
	docker-compose -f docker-compose.dev.yml build

logs:
	docker compose logs portfolio-crm $(args)

ps:
	docker-compose ps

exec:
	docker-compose exec portfolio-crm $(args)
