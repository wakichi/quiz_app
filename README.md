# sample_web

## git clone 後にやること
`
docker-compose build  
docker-compose exec backend python manage.py migrate
docker-compose up
`
## CICD
### frontのデプロイ方法
1. `sudo docker compose --file docker-compose.prod.front.yml  up`を実行
2. 1. で生成したbuild成果物を対応するs3のバケットにアップロード
3. cloudfrontに反映されるのを待つ

### backのデプロイ方法
1. `docker image`をdocker-hubにアップロード
2. ec2に入り、`docker compose up`を再実行

### 設定ファイルを変えた時
1. ec2に入り`git pull` => `docker compose up`を実行
