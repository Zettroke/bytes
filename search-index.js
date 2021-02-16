var searchIndex = JSON.parse('{\
"bytes":{"doc":"Provides abstractions for working with bytes.","i":[[0,"buf","bytes","Utilities for working with buffers.",null,null],[8,"Buf","bytes::buf","Read bytes from a buffer.",null,null],[10,"remaining","","Returns the number of bytes between the current position …",0,[[]]],[10,"chunk","","Returns a slice starting at the current position and of …",0,[[]]],[11,"chunks_vectored","","Fills <code>dst</code> with potentially multiple slices starting at …",0,[[]]],[10,"advance","","Advance the internal cursor of the Buf",0,[[]]],[11,"has_remaining","","Returns true if there are any more bytes to consume",0,[[]]],[11,"copy_to_slice","","Copies bytes from <code>self</code> into <code>dst</code>.",0,[[]]],[11,"get_u8","","Gets an unsigned 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_i8","","Gets a signed 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_u16","","Gets an unsigned 16 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u16_le","","Gets an unsigned 16 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i16","","Gets a signed 16 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i16_le","","Gets a signed 16 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u32","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_u32_le","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_i32","","Gets a signed 32 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i32_le","","Gets a signed 32 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u64","","Gets an unsigned 64 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u64_le","","Gets an unsigned 64 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i64","","Gets a signed 64 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i64_le","","Gets a signed 64 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u128","","Gets an unsigned 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u128_le","","Gets an unsigned 128 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i128","","Gets a signed 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_i128_le","","Gets a signed 128 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_uint","","Gets an unsigned n-byte integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_uint_le","","Gets an unsigned n-byte integer from <code>self</code> in …",0,[[]]],[11,"get_int","","Gets a signed n-byte integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_int_le","","Gets a signed n-byte integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_f32","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f32_le","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f64","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"get_f64_le","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"copy_to_bytes","","Consumes <code>len</code> bytes inside self and returns new instance …",0,[[],["bytes",3]]],[11,"take","","Creates an adaptor which will read at most <code>limit</code> bytes …",0,[[],["take",3]]],[11,"chain","","Creates an adaptor which will chain this buffer with …",0,[[["buf",8]],[["buf",8],["chain",3]]]],[11,"reader","","Creates an adaptor which implements the <code>Read</code> trait for …",0,[[],["reader",3]]],[8,"BufMut","","A trait for values that provide sequential write access …",null,null],[10,"remaining_mut","","Returns the number of bytes that can be written from the …",1,[[]]],[10,"advance_mut","","Advance the internal cursor of the BufMut",1,[[]]],[11,"has_remaining_mut","","Returns true if there is space in <code>self</code> for more bytes.",1,[[]]],[10,"chunk_mut","","Returns a mutable slice starting at the current BufMut …",1,[[],["uninitslice",3]]],[11,"put","","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[["buf",8]]]],[11,"put_slice","","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[]]],[11,"put_u8","","Writes an unsigned 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_i8","","Writes a signed 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_u16","","Writes an unsigned 16 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u16_le","","Writes an unsigned 16 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i16","","Writes a signed 16 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i16_le","","Writes a signed 16 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u32","","Writes an unsigned 32 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u32_le","","Writes an unsigned 32 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i32","","Writes a signed 32 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i32_le","","Writes a signed 32 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u64","","Writes an unsigned 64 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u64_le","","Writes an unsigned 64 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i64","","Writes a signed 64 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i64_le","","Writes a signed 64 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u128","","Writes an unsigned 128 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u128_le","","Writes an unsigned 128 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i128","","Writes a signed 128 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i128_le","","Writes a signed 128 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_uint","","Writes an unsigned n-byte integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_uint_le","","Writes an unsigned n-byte integer to <code>self</code> in the …",1,[[]]],[11,"put_int","","Writes a signed n-byte integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_int_le","","Writes a signed n-byte integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_f32","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f32_le","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f64","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"put_f64_le","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"limit","","Creates an adaptor which can write at most <code>limit</code> bytes to …",1,[[],["limit",3]]],[11,"writer","","Creates an adaptor which implements the <code>Write</code> trait for …",1,[[],["writer",3]]],[11,"chain_mut","","Creates an adapter which will chain this buffer with …",1,[[["bufmut",8]],[["bufmut",8],["chain",3]]]],[3,"Chain","","A <code>Chain</code> sequences two buffers.",null,null],[3,"IntoIter","","Iterator over the bytes contained by the buffer.",null,null],[3,"Limit","","A <code>BufMut</code> adapter which limits the amount of bytes that …",null,null],[3,"Take","","A <code>Buf</code> adapter which limits the bytes read from an …",null,null],[3,"UninitSlice","","Uninitialized byte slice.",null,null],[3,"Reader","","A <code>Buf</code> adapter which implements <code>io::Read</code> for the inner …",null,null],[3,"Writer","","A <code>BufMut</code> adapter which implements <code>io::Write</code> for the inner …",null,null],[8,"Buf","bytes","Read bytes from a buffer.",null,null],[10,"remaining","","Returns the number of bytes between the current position …",0,[[]]],[10,"chunk","","Returns a slice starting at the current position and of …",0,[[]]],[11,"chunks_vectored","bytes::buf","Fills <code>dst</code> with potentially multiple slices starting at …",0,[[]]],[10,"advance","bytes","Advance the internal cursor of the Buf",0,[[]]],[11,"has_remaining","bytes::buf","Returns true if there are any more bytes to consume",0,[[]]],[11,"copy_to_slice","","Copies bytes from <code>self</code> into <code>dst</code>.",0,[[]]],[11,"get_u8","","Gets an unsigned 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_i8","","Gets a signed 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_u16","","Gets an unsigned 16 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u16_le","","Gets an unsigned 16 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i16","","Gets a signed 16 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i16_le","","Gets a signed 16 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u32","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_u32_le","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_i32","","Gets a signed 32 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i32_le","","Gets a signed 32 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u64","","Gets an unsigned 64 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u64_le","","Gets an unsigned 64 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i64","","Gets a signed 64 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i64_le","","Gets a signed 64 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u128","","Gets an unsigned 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u128_le","","Gets an unsigned 128 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i128","","Gets a signed 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_i128_le","","Gets a signed 128 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_uint","","Gets an unsigned n-byte integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_uint_le","","Gets an unsigned n-byte integer from <code>self</code> in …",0,[[]]],[11,"get_int","","Gets a signed n-byte integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_int_le","","Gets a signed n-byte integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_f32","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f32_le","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f64","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"get_f64_le","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"copy_to_bytes","","Consumes <code>len</code> bytes inside self and returns new instance …",0,[[],["bytes",3]]],[11,"take","","Creates an adaptor which will read at most <code>limit</code> bytes …",0,[[],["take",3]]],[11,"chain","","Creates an adaptor which will chain this buffer with …",0,[[["buf",8]],[["buf",8],["chain",3]]]],[11,"reader","","Creates an adaptor which implements the <code>Read</code> trait for …",0,[[],["reader",3]]],[8,"BufMut","bytes","A trait for values that provide sequential write access …",null,null],[10,"remaining_mut","","Returns the number of bytes that can be written from the …",1,[[]]],[10,"advance_mut","","Advance the internal cursor of the BufMut",1,[[]]],[11,"has_remaining_mut","bytes::buf","Returns true if there is space in <code>self</code> for more bytes.",1,[[]]],[10,"chunk_mut","bytes","Returns a mutable slice starting at the current BufMut …",1,[[],["uninitslice",3]]],[11,"put","bytes::buf","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[["buf",8]]]],[11,"put_slice","","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[]]],[11,"put_u8","","Writes an unsigned 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_i8","","Writes a signed 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_u16","","Writes an unsigned 16 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u16_le","","Writes an unsigned 16 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i16","","Writes a signed 16 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i16_le","","Writes a signed 16 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u32","","Writes an unsigned 32 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u32_le","","Writes an unsigned 32 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i32","","Writes a signed 32 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i32_le","","Writes a signed 32 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u64","","Writes an unsigned 64 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u64_le","","Writes an unsigned 64 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i64","","Writes a signed 64 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i64_le","","Writes a signed 64 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u128","","Writes an unsigned 128 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u128_le","","Writes an unsigned 128 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i128","","Writes a signed 128 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i128_le","","Writes a signed 128 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_uint","","Writes an unsigned n-byte integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_uint_le","","Writes an unsigned n-byte integer to <code>self</code> in the …",1,[[]]],[11,"put_int","","Writes a signed n-byte integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_int_le","","Writes a signed n-byte integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_f32","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f32_le","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f64","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"put_f64_le","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"limit","","Creates an adaptor which can write at most <code>limit</code> bytes to …",1,[[],["limit",3]]],[11,"writer","","Creates an adaptor which implements the <code>Write</code> trait for …",1,[[],["writer",3]]],[11,"chain_mut","","Creates an adapter which will chain this buffer with …",1,[[["bufmut",8]],[["bufmut",8],["chain",3]]]],[3,"Bytes","bytes","A cheaply cloneable and sliceable chunk of contiguous …",null,null],[3,"BytesMut","","A unique reference to a contiguous slice of memory.",null,null],[11,"from","bytes::buf","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"into_iter","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","bytes","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"from","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"remaining","bytes::buf","",2,[[]]],[11,"chunk","","",2,[[]]],[11,"advance","","",2,[[]]],[11,"chunks_vectored","","",2,[[]]],[11,"remaining","","",6,[[]]],[11,"chunk","","",6,[[]]],[11,"advance","","",6,[[]]],[11,"remaining","bytes","",9,[[]]],[11,"chunk","","",9,[[]]],[11,"advance","","",9,[[]]],[11,"copy_to_bytes","","",9,[[],["bytes",3]]],[11,"remaining","","",10,[[]]],[11,"chunk","","",10,[[]]],[11,"advance","","",10,[[]]],[11,"copy_to_bytes","","",10,[[],["bytes",3]]],[11,"remaining_mut","bytes::buf","",2,[[]]],[11,"chunk_mut","","",2,[[],["uninitslice",3]]],[11,"advance_mut","","",2,[[]]],[11,"remaining_mut","","",4,[[]]],[11,"chunk_mut","","",4,[[],["uninitslice",3]]],[11,"advance_mut","","",4,[[]]],[11,"remaining_mut","bytes","",10,[[]]],[11,"advance_mut","","",10,[[]]],[11,"chunk_mut","","",10,[[],["uninitslice",3]]],[11,"put","","",10,[[["buf",8]]]],[11,"put_slice","","",10,[[]]],[11,"deref","","",9,[[]]],[11,"deref","","",10,[[]]],[11,"deref_mut","","",10,[[]]],[11,"from","","",9,[[],["bytes",3]]],[11,"from","","",9,[[],["bytes",3]]],[11,"from","","",9,[[["vec",3]],["bytes",3]]],[11,"from","","",9,[[["string",3]],["bytes",3]]],[11,"from","","",10,[[],["bytesmut",3]]],[11,"from","","",10,[[],["bytesmut",3]]],[11,"from","","",9,[[["bytesmut",3]],["bytes",3]]],[11,"fmt","bytes::buf","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","bytes","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"eq","","",9,[[["bytes",3]]]],[11,"eq","","",9,[[]]],[11,"eq","","",9,[[]]],[11,"eq","","",9,[[["vec",3]]]],[11,"eq","","",9,[[["string",3]]]],[11,"eq","","",9,[[]]],[11,"eq","","",10,[[["bytesmut",3]]]],[11,"eq","","",10,[[]]],[11,"eq","","",10,[[]]],[11,"eq","","",10,[[["vec",3]]]],[11,"eq","","",10,[[["string",3]]]],[11,"eq","","",10,[[]]],[11,"eq","","",9,[[["bytesmut",3]]]],[11,"eq","","",10,[[["bytes",3]]]],[11,"cmp","","",9,[[["bytes",3]],["ordering",4]]],[11,"cmp","","",10,[[["bytesmut",3]],["ordering",4]]],[11,"partial_cmp","","",9,[[["bytes",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",9,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",9,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",9,[[["vec",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",9,[[["string",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",9,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[["bytesmut",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[["vec",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[["string",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",10,[[],[["option",4],["ordering",4]]]],[11,"drop","","",9,[[]]],[11,"drop","","",10,[[]]],[11,"index","bytes::buf","",7,[[["range",3]],["uninitslice",3]]],[11,"index","","",7,[[["rangefrom",3]],["uninitslice",3]]],[11,"index","","",7,[[["rangefull",3]],["uninitslice",3]]],[11,"index","","",7,[[["rangeinclusive",3]],["uninitslice",3]]],[11,"index","","",7,[[["rangeto",3]],["uninitslice",3]]],[11,"index","","",7,[[["rangetoinclusive",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["range",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["rangefrom",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["rangefull",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["rangeinclusive",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["rangeto",3]],["uninitslice",3]]],[11,"index_mut","","",7,[[["rangetoinclusive",3]],["uninitslice",3]]],[11,"hash","bytes","",9,[[]]],[11,"hash","","",10,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"write_str","","",10,[[],["result",6]]],[11,"write_fmt","","",10,[[["arguments",3]],["result",6]]],[11,"from_iter","","",9,[[["intoiterator",8]]]],[11,"from_iter","","",10,[[["intoiterator",8]]]],[11,"from_iter","","",10,[[["intoiterator",8]]]],[11,"as_ref","","",9,[[]]],[11,"as_ref","","",10,[[]]],[11,"as_mut","","",10,[[]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"next","bytes::buf","",3,[[],["option",4]]],[11,"size_hint","","",3,[[]]],[11,"into_iter","","",2,[[]]],[11,"into_iter","bytes","",9,[[]]],[11,"into_iter","","",10,[[]]],[11,"extend","","",10,[[]]],[11,"extend","","",10,[[]]],[11,"clone","","",9,[[],["bytes",3]]],[11,"clone","","",10,[[],["bytesmut",3]]],[11,"default","","",9,[[],["bytes",3]]],[11,"default","","",10,[[],["bytesmut",3]]],[11,"fill_buf","bytes::buf","",5,[[],["result",6]]],[11,"consume","","",5,[[]]],[11,"read","","",5,[[],["result",6]]],[11,"write","","",8,[[],["result",6]]],[11,"flush","","",8,[[],["result",6]]],[11,"serialize","bytes","",9,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"deserialize","","",9,[[],[["bytes",3],["result",4]]]],[11,"deserialize","","",10,[[],[["result",4],["bytesmut",3]]]],[11,"chunks_vectored","bytes::buf","Fills <code>dst</code> with potentially multiple slices starting at …",0,[[]]],[11,"has_remaining","","Returns true if there are any more bytes to consume",0,[[]]],[11,"copy_to_slice","","Copies bytes from <code>self</code> into <code>dst</code>.",0,[[]]],[11,"get_u8","","Gets an unsigned 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_i8","","Gets a signed 8 bit integer from <code>self</code>.",0,[[]]],[11,"get_u16","","Gets an unsigned 16 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u16_le","","Gets an unsigned 16 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i16","","Gets a signed 16 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i16_le","","Gets a signed 16 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u32","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_u32_le","","Gets an unsigned 32 bit integer from <code>self</code> in the …",0,[[]]],[11,"get_i32","","Gets a signed 32 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i32_le","","Gets a signed 32 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u64","","Gets an unsigned 64 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u64_le","","Gets an unsigned 64 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i64","","Gets a signed 64 bit integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_i64_le","","Gets a signed 64 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_u128","","Gets an unsigned 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_u128_le","","Gets an unsigned 128 bit integer from <code>self</code> in …",0,[[]]],[11,"get_i128","","Gets a signed 128 bit integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_i128_le","","Gets a signed 128 bit integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_uint","","Gets an unsigned n-byte integer from <code>self</code> in big-endian …",0,[[]]],[11,"get_uint_le","","Gets an unsigned n-byte integer from <code>self</code> in …",0,[[]]],[11,"get_int","","Gets a signed n-byte integer from <code>self</code> in big-endian byte …",0,[[]]],[11,"get_int_le","","Gets a signed n-byte integer from <code>self</code> in little-endian …",0,[[]]],[11,"get_f32","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f32_le","","Gets an IEEE754 single-precision (4 bytes) floating point …",0,[[]]],[11,"get_f64","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"get_f64_le","","Gets an IEEE754 double-precision (8 bytes) floating point …",0,[[]]],[11,"copy_to_bytes","","Consumes <code>len</code> bytes inside self and returns new instance …",0,[[],["bytes",3]]],[11,"take","","Creates an adaptor which will read at most <code>limit</code> bytes …",0,[[],["take",3]]],[11,"chain","","Creates an adaptor which will chain this buffer with …",0,[[["buf",8]],[["buf",8],["chain",3]]]],[11,"reader","","Creates an adaptor which implements the <code>Read</code> trait for …",0,[[],["reader",3]]],[11,"has_remaining_mut","","Returns true if there is space in <code>self</code> for more bytes.",1,[[]]],[11,"put","","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[["buf",8]]]],[11,"put_slice","","Transfer bytes into <code>self</code> from <code>src</code> and advance the cursor …",1,[[]]],[11,"put_u8","","Writes an unsigned 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_i8","","Writes a signed 8 bit integer to <code>self</code>.",1,[[]]],[11,"put_u16","","Writes an unsigned 16 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u16_le","","Writes an unsigned 16 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i16","","Writes a signed 16 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i16_le","","Writes a signed 16 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u32","","Writes an unsigned 32 bit integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_u32_le","","Writes an unsigned 32 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i32","","Writes a signed 32 bit integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_i32_le","","Writes a signed 32 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u64","","Writes an unsigned 64 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u64_le","","Writes an unsigned 64 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i64","","Writes a signed 64 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i64_le","","Writes a signed 64 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_u128","","Writes an unsigned 128 bit integer to <code>self</code> in the …",1,[[]]],[11,"put_u128_le","","Writes an unsigned 128 bit integer to <code>self</code> in …",1,[[]]],[11,"put_i128","","Writes a signed 128 bit integer to <code>self</code> in the big-endian …",1,[[]]],[11,"put_i128_le","","Writes a signed 128 bit integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_uint","","Writes an unsigned n-byte integer to <code>self</code> in big-endian …",1,[[]]],[11,"put_uint_le","","Writes an unsigned n-byte integer to <code>self</code> in the …",1,[[]]],[11,"put_int","","Writes a signed n-byte integer to <code>self</code> in big-endian byte …",1,[[]]],[11,"put_int_le","","Writes a signed n-byte integer to <code>self</code> in little-endian …",1,[[]]],[11,"put_f32","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f32_le","","Writes  an IEEE754 single-precision (4 bytes) floating …",1,[[]]],[11,"put_f64","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"put_f64_le","","Writes  an IEEE754 double-precision (8 bytes) floating …",1,[[]]],[11,"limit","","Creates an adaptor which can write at most <code>limit</code> bytes to …",1,[[],["limit",3]]],[11,"writer","","Creates an adaptor which implements the <code>Write</code> trait for …",1,[[],["writer",3]]],[11,"chain_mut","","Creates an adapter which will chain this buffer with …",1,[[["bufmut",8]],[["bufmut",8],["chain",3]]]],[11,"first_ref","","Gets a reference to the first underlying <code>Buf</code>.",2,[[]]],[11,"first_mut","","Gets a mutable reference to the first underlying <code>Buf</code>.",2,[[]]],[11,"last_ref","","Gets a reference to the last underlying <code>Buf</code>.",2,[[]]],[11,"last_mut","","Gets a mutable reference to the last underlying <code>Buf</code>.",2,[[]]],[11,"into_inner","","Consumes this <code>Chain</code>, returning the underlying values.",2,[[]]],[11,"into_inner","","Consumes this <code>IntoIter</code>, returning the underlying value.",3,[[]]],[11,"get_ref","","Gets a reference to the underlying <code>Buf</code>.",3,[[]]],[11,"get_mut","","Gets a mutable reference to the underlying <code>Buf</code>.",3,[[]]],[11,"into_inner","","Consumes this <code>Limit</code>, returning the underlying value.",4,[[]]],[11,"get_ref","","Gets a reference to the underlying <code>BufMut</code>.",4,[[]]],[11,"get_mut","","Gets a mutable reference to the underlying <code>BufMut</code>.",4,[[]]],[11,"limit","","Returns the maximum number of bytes that can be written",4,[[]]],[11,"set_limit","","Sets the maximum number of bytes that can be written.",4,[[]]],[11,"get_ref","","Gets a reference to the underlying <code>Buf</code>.",5,[[]]],[11,"get_mut","","Gets a mutable reference to the underlying <code>Buf</code>.",5,[[]]],[11,"into_inner","","Consumes this <code>Reader</code>, returning the underlying value.",5,[[]]],[11,"into_inner","","Consumes this <code>Take</code>, returning the underlying value.",6,[[]]],[11,"get_ref","","Gets a reference to the underlying <code>Buf</code>.",6,[[]]],[11,"get_mut","","Gets a mutable reference to the underlying <code>Buf</code>.",6,[[]]],[11,"limit","","Returns the maximum number of bytes that can be read.",6,[[]]],[11,"set_limit","","Sets the maximum number of bytes that can be read.",6,[[]]],[11,"from_raw_parts_mut","","Create a <code>&mut UninitSlice</code> from a pointer and a length.",7,[[],["uninitslice",3]]],[11,"write_byte","","Write a single byte at the specified offset.",7,[[]]],[11,"copy_from_slice","","Copies bytes  from <code>src</code> into <code>self</code>.",7,[[]]],[11,"as_mut_ptr","","Return a raw pointer to the slice\'s buffer.",7,[[]]],[11,"len","","Returns the number of bytes in the slice.",7,[[]]],[11,"get_ref","","Gets a reference to the underlying <code>BufMut</code>.",8,[[]]],[11,"get_mut","","Gets a mutable reference to the underlying <code>BufMut</code>.",8,[[]]],[11,"into_inner","","Consumes this <code>Writer</code>, returning the underlying value.",8,[[]]],[11,"new","bytes","Creates a new empty <code>Bytes</code>.",9,[[],["bytes",3]]],[11,"from_static","","Creates a new <code>Bytes</code> from a static slice.",9,[[],["bytes",3]]],[11,"len","","Returns the number of bytes contained in this <code>Bytes</code>.",9,[[]]],[11,"is_empty","","Returns true if the <code>Bytes</code> has a length of 0.",9,[[]]],[11,"copy_from_slice","","Creates <code>Bytes</code> instance from slice, by copying it.",9,[[]]],[11,"slice","","Returns a slice of self for the provided range.",9,[[],["bytes",3]]],[11,"slice_ref","","Returns a slice of self that is equivalent to the given …",9,[[],["bytes",3]]],[11,"split_off","","Splits the bytes into two at the given index.",9,[[],["bytes",3]]],[11,"split_to","","Splits the bytes into two at the given index.",9,[[],["bytes",3]]],[11,"truncate","","Shortens the buffer, keeping the first <code>len</code> bytes and …",9,[[]]],[11,"clear","","Clears the buffer, removing all data.",9,[[]]],[11,"with_capacity","","Creates a new <code>BytesMut</code> with the specified capacity.",10,[[],["bytesmut",3]]],[11,"new","","Creates a new <code>BytesMut</code> with default capacity.",10,[[],["bytesmut",3]]],[11,"len","","Returns the number of bytes contained in this <code>BytesMut</code>.",10,[[]]],[11,"is_empty","","Returns true if the <code>BytesMut</code> has a length of 0.",10,[[]]],[11,"capacity","","Returns the number of bytes the <code>BytesMut</code> can hold without …",10,[[]]],[11,"freeze","","Converts <code>self</code> into an immutable <code>Bytes</code>.",10,[[],["bytes",3]]],[11,"split_off","","Splits the bytes into two at the given index.",10,[[],["bytesmut",3]]],[11,"split","","Removes the bytes from the current view, returning them …",10,[[],["bytesmut",3]]],[11,"split_to","","Splits the buffer into two at the given index.",10,[[],["bytesmut",3]]],[11,"truncate","","Shortens the buffer, keeping the first <code>len</code> bytes and …",10,[[]]],[11,"clear","","Clears the buffer, removing all data.",10,[[]]],[11,"resize","","Resizes the buffer so that <code>len</code> is equal to <code>new_len</code>.",10,[[]]],[11,"set_len","","Sets the length of the buffer.",10,[[]]],[11,"reserve","","Reserves capacity for at least <code>additional</code> more bytes to …",10,[[]]],[11,"extend_from_slice","","Appends given bytes to this <code>BytesMut</code>.",10,[[]]],[11,"unsplit","","Absorbs a <code>BytesMut</code> that was previously split off.",10,[[["bytesmut",3]]]]],"p":[[8,"Buf"],[8,"BufMut"],[3,"Chain"],[3,"IntoIter"],[3,"Limit"],[3,"Reader"],[3,"Take"],[3,"UninitSlice"],[3,"Writer"],[3,"Bytes"],[3,"BytesMut"]],"a":{"bytes":[3,83],"bytes_mut":[42,122]}}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);