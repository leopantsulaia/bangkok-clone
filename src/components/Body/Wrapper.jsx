export default function wrapper() {
	return (
		<>
			<div id='wrapper'>
				<div id='footer-wrapper'>
					<div
						data-elementor-type='wp-post'
						data-elementor-id='5968'
						className='elementor elementor-5968'></div>
				</div>
			</div>
			<div id='woocommerce-mini-cart-wrapper'>
				<div id='woocommerce-mini-cart-overlay'></div>
				<div id='woocommerce-mini-cart-flyout'>
					<div className='woocommerce-mini-cart-shopping-cart'>
						<p className='woocommerce-mini-cart__empty-message'>
							No products in the cart.
						</p>
					</div>
				</div>
			</div>
			<button
				id='toTop'
				style={{ background: "none", border: "none", cursor: "pointer" }}>
				<i className='fa fa-angle-up'></i>
			</button>
			<div id='overlay_background'></div>
		</>
	);
}
