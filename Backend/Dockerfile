FROM python:3

ENV PYTHONUNBUFFERED=1

# RUN apk add build-base python3-dev py-pip jpeg-dev zlib-dev postgresql-dev musl-dev bash

RUN mkdir /code

WORKDIR /code/api

COPY requirements.txt /code/api

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . /code/