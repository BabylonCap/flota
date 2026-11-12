( function () {
	const initializeHeader = function () {
		const header = document.querySelector( '.flota-header' );

		if ( ! header ) {
			return;
		}

		const toggle = header.querySelector( '.flota-menu-toggle' );
		const navigation = header.querySelector( '.flota-nav' );

		if ( ! toggle || ! navigation ) {
			return;
		}

		const setOpen = function ( isOpen ) {
			header.classList.toggle( 'is-open', isOpen );
			toggle.setAttribute( 'aria-expanded', String( isOpen ) );
			toggle.setAttribute(
				'aria-label',
				isOpen ? 'Cerrar menú' : 'Abrir menú'
			);
		};

		toggle.addEventListener( 'click', function () {
			setOpen( toggle.getAttribute( 'aria-expanded' ) !== 'true' );
		} );

		navigation.addEventListener( 'click', function ( event ) {
			if ( event.target.closest( 'a' ) ) {
				setOpen( false );
			}
		} );

		document.addEventListener( 'keydown', function ( event ) {
			if ( event.key === 'Escape' && toggle.getAttribute( 'aria-expanded' ) === 'true' ) {
				setOpen( false );
				toggle.focus();
			}
		} );
	};

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', initializeHeader );
	} else {
		initializeHeader();
	}
} )();
