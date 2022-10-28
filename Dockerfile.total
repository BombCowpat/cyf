# 基础镜像
FROM node:14-alpine

# 指定环境变量和镜像工作目录
ENV NODE_ENV=production \
  APP_PATH=/root

WORKDIR $APP_PATH

# 拷贝当前目录下的所有文件(除了.dockerignore里排除的)，都拷贝到工作目录下
COPY . .

# 在工作目录下执行
RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
