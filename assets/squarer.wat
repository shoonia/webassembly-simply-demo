(module
  (type $type0 (func (param f64) (result f64)))
  (table 0 anyfunc)
  (memory 1)
  (export "memory" memory)
  (export "_Z7squarerd" $func0)
  (func $func0 (param $var0 f64) (result f64)
    get_local $var0
    get_local $var0
    f64.mul
  )
)