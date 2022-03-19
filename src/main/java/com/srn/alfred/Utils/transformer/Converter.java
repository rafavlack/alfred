package com.srn.alfred.Utils.transformer;

public interface Converter <E, D>{

   E transformToEntity(D d);

   D transformToDto(E e);
}
