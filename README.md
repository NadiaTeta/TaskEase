## TaskEase App
TaskEase is a simple web application designed to help users manage their tasks and projects efficiently.
## Running application locally
To run the TaskEase application locally, follow these steps:
1.	Clone the Repository to your local machine using the following command: “git clone https://github.com/your-username/TaskEase.git”.
2.	Navigate to the Project Directory: “cd TaskEase”
3.	Open index.html in a Web Browser.
4.	Start managing tour tasks.
## Building Docker Image and Running a Container
To build the Docker image for the TaskEase application and run a container using the image, make sure you have Docker installed on your system and then follow these steps:
1. Run the following command to build the Docker image for the TaskEase application: "docker build -t TaskEase-app ."
2. After the Docker image is built successfully. run the following command to start a Docker container using the image: "docker run -d -p 8080:80 taskease-app".
3. Now open a web browser and navigate to "http://localhost:8080" to access the TaskEase application running in the Docker container.
## Assumptions or decisions made during the development process
During the development process of TaskEase. the following assumptions were made:
1. Technology stack: TaskEase is built using HTML,CSS, and JavaScript to keep it lightweight and easy to deploy. No additional frameworks or libraries were used to ensure simplicity and fast performance.
2. Dockerisation: Docker was chosen as the containerization platform to package the TaskEase application into a container, making it easy to deploy and scale across different environments.
3. Development Workflow: The development process follows a simple workflow, starting with cloning the repository, making changes to the code as needed, and running the application locally for testing.
