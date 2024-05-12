import streamlit as st
import tensorflow as tf
import numpy as np
from flask import Flask, jsonify, request
import requests

# Create a Flask app
app = Flask(__name__)

# Tensorflow Model Prediction
def model_prediction(test_image):
    model = tf.keras.models.load_model("image_to_food_model1.h5")
    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(256, 256))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # convert single image to batch
    predictions = model.predict(input_arr)
    return np.argmax(predictions)  # return index of max element


# Define an endpoint to handle predictions
@app.route('/', methods=['POST'])
def predict():
    test_image = request.files['file']
    result_index = model_prediction(test_image)
    # Reading Labels
    with open("labels.txt") as f:
        content = f.readlines()
    label = [i.strip() for i in content]
    prediction = label[result_index]
    return jsonify({"prediction": prediction})


# Sidebar
st.sidebar.title("Dashboard")
app_mode = st.sidebar.selectbox("Select Page", ["Prediction"])

# Main Page
# if app_mode == "Home":
#     st.header("Food Recipe")
#     image_path = "home_page.jpg"
#     st.image(image_path)

# Prediction Page
if app_mode == "Prediction":
    st.header("Model Prediction")
    test_image = st.file_uploader("Choose an Image:")
    if st.button("Show Image"):
        st.image(test_image, width=4, use_column_width=True)

    # Predict button
    if st.button("Predict"):
        st.write("Our Prediction")
        # Send image to backend for prediction
        files = {'file': test_image.getvalue()}
        response = requests.post('http://localhost:8501', files=files)
        prediction = response.json()["prediction"]
        st.success("Model is Predicting it's a {}".format(prediction))




# import streamlit as st
# import tensorflow as tf
# import numpy as np



# #Tensorflow Model Prediction
# def model_prediction(test_image):
#     model = tf.keras.models.load_model("image_to_food_model1.h5")
#     image = tf.keras.preprocessing.image.load_img(test_image,target_size=(256,256))
#     input_arr = tf.keras.preprocessing.image.img_to_array(image)
#     input_arr = np.array([input_arr]) #convert single image to batch
#     predictions = model.predict(input_arr)
#     return np.argmax(predictions) #return index of max element


# #Sidebar
# st.sidebar.title("Dashboard")
# app_mode = st.sidebar.selectbox("Select Page",["Prediction"])

# # #Main Page
# # if(app_mode=="Home"):
# #     st.header("Food Recipe")
# #     image_path = "home_page.jpg"
# #     st.image(image_path)


# #Prediction Page
# if(app_mode=="Prediction"):
#     st.header("Model Prediction")
#     test_image = st.file_uploader("Choose an Image:")
#     if(st.button("Show Image")):
#         st.image(test_image,width=4,use_column_width=True)
    
#     #Predict button
#     if(st.button("Predict")):
#         st.snow()
#         st.write("Our Prediction")
#         result_index = model_prediction(test_image)
#         #Reading Labels
#         with open("labels.txt") as f:
#             content = f.readlines()
#         label = []
        
#         for i in content:
#             label.append(i[:-1])
#         st.success("Model is Predicting it's a {}".format(label[result_index]))
  

