%dw 2.0

output application/json skipNullOn="everywhere"
---
if (sizeOf((([{
  "hi": "suyash"  
}]  map ((item, index) -> item )) )  filter ((item, index) -> sizeOf(item.hi)>1))==0) 0 else "a"

