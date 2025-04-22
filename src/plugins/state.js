
import products from '~/state/products'

export default (context, inject) => {
	inject('products', products(context))
}
