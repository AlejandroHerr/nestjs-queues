How to test: 

Run `docker compose up -d` and start the app with `npm run start:dev`. 

To test it -> 
```
curl --location --request POST 'localhost:3005/sql-ai/webhook'
```

Jobs are made to faile 1/4 times.
Note that each log has a transactionId that is passed in every job.