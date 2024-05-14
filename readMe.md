# Cooking by Sight

Welcome to "Cooking by Sight"! This project combines deep learning, computer vision, and natural language processing techniques to generate recipes from food images. The frontend provides an intuitive interface for users to upload images and view generated recipes, while the backend handles image recognition and recipe generation.

## Overview

In today's fast-paced world, cooking can be both an enjoyable hobby and a necessity. However, sometimes finding the right recipe for a dish can be challenging, especially when you don't know the name of the dish or its ingredients. "Cooking by Sight" aims to solve this problem by allowing users to simply take a picture of the food they want to cook and generate a recipe based on that image.

## Features

- **Image Recognition**: Our deep learning model can accurately identify various types of food items in an image.
- **Recipe Generation**: Once the food is identified, the system generates a recipe based on the recognized ingredients.
- **Natural Language Processing**: The generated recipes are presented in a human-readable format, making them easy to follow.
- **User-Friendly Interface**: A simple and intuitive user interface makes it easy for users to interact with the system.

## Backend Development

The backend development handles image recognition and recipe generation. It is built using Python and Streamlit, with TensorFlow for deep learning and NLTK for natural language processing.

For backend development instructions and setup, please refer to the [backend README](backend/README.md).

## Frontend Development

The frontend development provides an interface for users to interact with the system. It is built using React, Next.js, and Tailwind CSS.

For frontend development instructions and setup, please refer to the [frontend README](frontend/README.md).

## Usage

To use "Cooking by Sight," follow these simple steps:

1. Start the backend server by following the instructions in the [backend README](backend/README.md).
2. Start the frontend development server by following the instructions in the [frontend README](frontend/README.md).
3. Open your browser and navigate to the provided URL to access the application.
4. Upload an image of the food you want to cook.
5. Wait for the system to identify the food items in the image.
6. View the generated recipe based on the identified ingredients.
7. Follow the steps in the recipe to cook your dish!

## Technologies Used

- **Backend**:
  - Python
  - Streamlit
  - TensorFlow
  - Natural Language Toolkit (NLTK)

- **Frontend**:
  - React
  - Next.js
  - Tailwind CSS

## Contributing

Contributions to "Cooking by Sight" are welcome! If you'd like to contribute to either the backend or frontend development, please fork the repository and submit a pull request. Feel free to open an issue if you have any suggestions or encounter any bugs.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We would like to thank the following resources for their valuable contributions to this project:

- [Open Food Facts](https://world.openfoodfacts.org/): Database of food products with ingredients, nutritional information, and more.
- [TensorFlow Hub](https://tfhub.dev/): Repository of pre-trained machine learning models for various tasks.
- [Flaticon](https://www.flaticon.com/): Source of icons used in the user interface.

## Contact

For questions or inquiries about "Cooking by Sight," please contact [mohammadhamim@stu.zzu.edu.cn](mailto:mohammadhamim@stu.zzu.edu.cn), [raziulhasannayon@stu.zzu.edu.cn](mailto:raziulhasannayon@stu.zzu.edu.cn), or [nishatbinmdharun@stu.zzu.edu.cn](mailto:nishatbinmdharun@stu.zzu.edu.cn).
