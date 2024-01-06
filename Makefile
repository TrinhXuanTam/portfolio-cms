up-bg:
	docker-compose up -d

up:
	docker-compose up

kill:
	docker-compose kill

build:
	docker-compose build

logs:
	docker compose logs portfolio-crm $(args)

ps:
	docker-compose ps

exec:
	docker-compose exec portfolio-crm $(args)
