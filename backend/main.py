import streamlit as st
import tensorflow as tf
import numpy as np
import pandas as pd

# Load the CSV file
recipe_data = pd.read_csv('recipe.csv')

# Tensorflow Model Prediction
def model_prediction(test_image):
    model = tf.keras.models.load_model("image_to_food_model2.h5")
    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(256, 256))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # convert single image to batch
    predictions = model.predict(input_arr)
    return np.argmax(predictions)  # return index of max element

# Function to get the recipe values of the predicted class
def get_recipe(predicted_class, recipe_data):
    # Find the row where the 'Name' column matches the predicted class label
    recipe = recipe_data.loc[recipe_data['Name'] == predicted_class]
    if not recipe.empty:
        procedure = recipe["Procedure"].values[0]
        suitable_for_diabetic = recipe["Suitable for Diabetic Patients to Eat"].values[0]
        calorie = recipe["Calorie of the food"].values[0]
        cooking_time = recipe["Approximate time for cooking(Minute)"].values[0]
        return procedure, suitable_for_diabetic, calorie, cooking_time
    else:
        return "Recipe not found.", "", "", ""

# Sidebar
st.sidebar.title("Dashboard")
app_mode = st.sidebar.selectbox("Select Page", ["Prediction"])

# # Main Page
# if app_mode == "Home":
#     st.header("Food Recipe")
#     image_path = "home_page.jpg"
#     st.image(image_path)

# Prediction Page
if app_mode == "Prediction":
    st.header("Model Prediction")
    st.write("Note: If you provide invalid image, the prediction will be wrong.")
    test_image = st.file_uploader("Choose an Image:")
    st.write("File Supported: .jpg, .jpeg, .png")
    if test_image is not None:
        if st.button("Show Image"):
            st.image(test_image, width=4, use_column_width=True)


        # Predict button
        if st.button("Predict"):
            # st.snow()
            st.write("Our Prediction")
            result_index = model_prediction(test_image)
            
            # Reading Labels
            with open("labels.txt") as f:
                content = f.readlines()
            label = [i.strip() for i in content]
            
            predicted_label = label[result_index]
            st.success("Model is Predicting it's a {}".format(predicted_label))
            
            # Get the recipe for the predicted label
            procedure, suitable_for_diabetic, calorie, cooking_time = get_recipe(predicted_label, recipe_data)
            if procedure != "Recipe not found.":
                st.header("Recipe Details for {}".format(predicted_label))
                st.subheader("Procedure:")
                st.write(procedure)
                st.subheader("Suitable for Diabetic Patients to Eat:")
                st.write(suitable_for_diabetic)
                st.subheader("Calorie of the food:")
                st.write(calorie)
                st.subheader("Approximate time for cooking (Minute):")
                st.write(cooking_time)
            else:
                st.error(procedure)
