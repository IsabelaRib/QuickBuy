﻿using QuickBuy.Dominio.Enumerados;


namespace QuickBuy.Dominio.ObjetoDeValor
{
    public class FormaPagamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }

        public bool EBoleto
        {
            get {  return Id == (int)TipoPagamentoEnum.Boleto; }
        }
        public bool ECartaoCredito
        {
            get { return Id == (int)TipoPagamentoEnum.CartaoCredito; }
        }
        public bool EDeposito
        {
            get { return Id == (int)TipoPagamentoEnum.Deposito; }
        }
        public bool NaoFoiDefinido
        {
            get { return Id == (int)TipoPagamentoEnum.NaoDefinido; }
        }
    }
}
