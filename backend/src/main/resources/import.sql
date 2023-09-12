INSERT INTO tb_cliente(name, created_At) VALUES ('Sebastião', NOW());
INSERT INTO tb_cliente(name, created_At) VALUES ('Paula', NOW());
INSERT INTO tb_cliente(name, created_At) VALUES ('Daniel', NOW());

INSERT INTO tb_fatura(invoice_month, brand, total_month, date) VALUES (8, 0, 1100.0, TIMESTAMP WITH TIME ZONE '2023-09-12T11:00:00Z');
INSERT INTO tb_fatura(invoice_month, brand, total_month, date) VALUES (8, 1, 1120.0, TIMESTAMP WITH TIME ZONE '2023-09-12T11:00:00Z');

INSERT INTO tb_fatura_cliente(cliente_id, fatura_id) VALUES (1, 1);
INSERT INTO tb_fatura_cliente(cliente_id, fatura_id) VALUES (1, 2);
INSERT INTO tb_fatura_cliente(cliente_id, fatura_id) VALUES (2, 1);
INSERT INTO tb_fatura_cliente(cliente_id, fatura_id) VALUES (3, 1);
