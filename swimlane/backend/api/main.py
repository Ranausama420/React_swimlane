from fastapi import FastAPI, HTTPException
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from typing import Optional
from datetime import datetime, timedelta
import jwt

app = FastAPI()

# replace these with your own values
username = "user"
password = "password"
secret_key = "secret_key"

security = HTTPBasic()

@app.post("/login")
def login(credentials: HTTPBasicCredentials):
    if credentials.username != username or credentials.password != password:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    # create access token that expires in 30 minutes
    access_token = create_access_token(data={"sub": username}, expires_delta=timedelta(minutes=30))

    return {"access_token": access_token}

@app.get("/protected")
def protected(username: Optional[str] = None, authorization: Optional[str] = None):
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header missing")

    try:
        token = authorization.split(" ")[1]
        payload = jwt.decode(token, secret_key, algorithms=["HS256"])
        if username and payload["sub"] != username:
            raise HTTPException(status_code=401, detail="Invalid username")
    except Exception as e:
        print(e)
        
        raise HTTPException(status_code=401, detail="Invalid authorization token")

    return {"message": "This is a protected endpoint"}

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, secret_key, algorithm="HS256")
    return encoded_jwt
