from flask import Flask, request, jsonify, redirect, url_for, make_response, render_template
import mysql.connector

app = Flask(__name__)

host = "database.c9byluzyaqx5.us-east-1.rds.amazonaws.com"
user = "admin"
password = "123456789"
port = "3306"
database = "chinook"
conn = mysql.connector.connect (host=host, user=user, passwd=password, port=port, database=database)


@app.route('/anos', methods=['GET', 'POST'])
def anos():
    cursor = conn.cursor()
    cursor.execute("select DISTINCT Year(InvoiceDate) from invoices")
    anos = cursor.fetchall()

    return jsonify(anos)


@app.route('/vendas-ano/<ano>', methods=['GET', 'POST'])
def vendas_por_ano(ano):
    cursor = conn.cursor()
    cursor.execute(f"select InvoiceId from invoices where Year(InvoiceDate)='{ano}'")
    records = cursor.fetchall()
    #row_headers = ''
    #result = [dict(zip(tuple (row_headers) ,i)) for i in records]
    return jsonify(records)


@app.route('/valor-venda/<id>', methods=['GET', 'POST'])
def valor_por_venda(id):
    cursor = conn.cursor()
    cursor.execute(f"select Total from invoices where InvoiceId='{id}'")
    records = cursor.fetchall()
    return jsonify(records)










@app.errorhandler(404)
def page_not_found(error):
    return 'Pagina Não Encontrada!', 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)