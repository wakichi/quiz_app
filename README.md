# Quiz Runner
## これはなに？
二択クイズを出題したり解いたりできるウェブアプリです

## git clone 後にやること

docker-compose build  
docker-compose exec backend python manage.py migrate
docker-compose up

## docker 環境実行方法
本アプリケーションは、実行環境(prod/dev)にそれぞれのdocker-composeファイルを用意しています。
そのため以下を参考に実行してください。
### dev環境
`sudo docker compose up`  
このコマンドにより、database, backend, frontendのローカルサーバーがそれぞれ立ち上がります。
また、hotReloadが可能なため、開発向きの設定です。

### prod環境(front)
`sudo docker compose --file docker-compose.prod.front.yml up`   
このコマンドを実行すると、frontのbuildファイルが生成されます。

### prod環境(back)
`sudo docker compose --file docker-compose.prod.yml up`   
backend, web-serverがそれぞれ立ち上がります。
また、実行前にbackend.envファイルに設定情報が入っているか確認してください。

## CICD
### frontのデプロイ方法
1. `sudo docker compose --file docker-compose.prod.front.yml  up`  を実行
2. 1 で生成したbuild成果物を対応するs3のバケットにアップロード
3. cloudfrontに反映されるのを待つ

### backのデプロイ方法
1. `docker image`をdocker-hubにアップロード
2. ec2に入り、`docker compose up`を再実行

### 設定ファイルを変えた時
1. ec2に入り`git pull` => `docker compose up`を実行
