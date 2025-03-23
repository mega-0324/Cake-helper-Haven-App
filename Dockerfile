# Use Nginx as the web server
FROM nginx:latest

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files into the container
COPY . /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 30008

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
