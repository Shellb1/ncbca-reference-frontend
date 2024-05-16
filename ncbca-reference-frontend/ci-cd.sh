#!/bin/bash

# Load secrets
source secrets.env

# EC2 Info
EC2_HOST=ec2-18-191-148-121.us-east-2.compute.amazonaws.com

# Build Angular project
ng build --configuration production

# Copy contents of dist folder to frontend folder
echo "Copying Generated UI to frontend"
scp -i $PRIVATE_KEY -r dist/ncbca-reference-frontend/* ubuntu@$EC2_HOST:~/ncbca-reference-frontend

# Commands to run on EC2 server
ssh -i $PRIVATE_KEY ubuntu@$EC2_HOST << 'EOF'
    echo "Emptying /var/www/ncbca-reference-frontend directory..."
    sudo rm -rf /var/www/ncbca-reference-frontend/*
    echo "Moving UI to the correct directory..."
    sudo mv ~/ncbca-reference-frontend/* /var/www/ncbca-reference-frontend/
    echo "Cleaning up..."
    sudo rm -rf ~/ncbca-reference-frontend/*
    echo "UI deployed successfully."
EOF
