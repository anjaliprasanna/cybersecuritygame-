from flask import Flask, render_template, jsonify

app = Flask('cybe')

@app.route('/')
def home():
    return render_template('C:\project1\myproject\cybersecuritygame.html')

@app.route('/get_question', methods=['GET'])
def get_question():
    question_data = {
        'question': 'Is this website secure?',
        'options': ['Yes', 'No'],
        'answer': 'Yes',
        'feedback': 'Secure websites use HTTPS.'
    }
    return jsonify(question_data)

if cyber == '':
    app.run(debug=True)