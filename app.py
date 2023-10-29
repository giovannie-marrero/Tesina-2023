from flask import Flask, render_template
import csv

app = Flask(__name__)

@app.route('/')
def student_table():
    students = []
    with open('training_model_data.csv', 'r') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            students.append(row)

    return render_template('index.html', students=students)

if __name__ == '__main__':
    app.run(debug=True)
