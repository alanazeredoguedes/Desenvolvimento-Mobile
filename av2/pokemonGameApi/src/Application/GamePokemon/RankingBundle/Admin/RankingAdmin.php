<?php
namespace App\Application\GamePokemon\RankingBundle\Admin;


use App\Application\GamePokemon\UsuarioBundle\Entity\Usuario;
use App\Application\GamePokemon\RankingBundle\Entity\Ranking;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Form\Type\ModelListType;
use Sonata\AdminBundle\Route\RouteCollection;

//Types Symfony Form Types
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\BaseType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\CurrencyType;
use Symfony\Component\Form\Extension\Core\Type\DateIntervalType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\LanguageType;
use Symfony\Component\Form\Extension\Core\Type\LocaleType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\ResetType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\TimezoneType;
use Symfony\Component\Form\Extension\Core\Type\TransformationFailureExtension;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\WeekType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotNull;

class RankingAdmin extends AbstractAdmin
{
    public function toString($object)
    {
        return $object instanceof Ranking
            ? $object->getStringId()
            : ''; // shown in the breadcrumb on the create view
    }

    public function getExportFields()
    {
        return array('Id' => 'id', 'Pontos' => 'pontos', 'Acertos' => 'acertos', 'Erros' => 'erros', 'JogosPulados' => 'jogosPulados', 'Usuario' => 'usuario.nick', );
    }
    
    protected function configureRoutes(RouteCollection $collection)
    {
        //$collection->remove('create');
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper): void
    {
        $datagridMapper
            ->add('id')
            
            ->add('pontos', null, [
                'label' => 'Pontos',
            ])
            ->add('acertos', null, [
                'label' => 'Acertos',
            ])
            ->add('erros', null, [
                'label' => 'Erros',
            ])
            ->add('jogosPulados', null, [
                'label' => 'JogosPulados',
            ])
            ->add('usuario', null, [], EntityType::class,[
                'class' => Usuario::class,
                'label' => 'Usuario',
                'multiple' => true,
                'choice_label' => function ($usuario) {
                    return $usuario->getNick();
                },
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper): void
    {
        unset($this->listModes['mosaic']);

        $listMapper
            //->addIdentifier('id')
            
            ->addIdentifier('pontos', null, [
                'label' => 'Pontos',
                
                
            ])
            ->addIdentifier('acertos', null, [
                'label' => 'Acertos',
                
                
            ])
            ->addIdentifier('erros', null, [
                'label' => 'Erros',
                
                
            ])
            ->addIdentifier('jogosPulados', null, [
                'label' => 'JogosPulados',
                
                
            ])
            ->add('usuario', null, [
                'label' => 'Usuario',
                'associated_property' => 'nick',
            ])          
            ->add('_action', null, [
                'actions' => [
                    'show' => [],
                    'edit' => [],
                    'delete' => [],
                ],
            ]);
    }
    
    protected function configureFormFields(FormMapper $formMapper): void
    {
        $formMapper
            
            ->add('pontos', IntegerType::class, [
                'label' => 'Pontos:',
                'required' => false,
                
                'constraints' => [  ],
                'help' => '',
            ])
            ->add('acertos', IntegerType::class, [
                'label' => 'Acertos:',
                'required' => true,
                
                'constraints' => [ 
                    new NotNull(),
             ],
                'help' => '',
            ])
            ->add('erros', IntegerType::class, [
                'label' => 'Erros:',
                'required' => true,
                
                'constraints' => [ 
                    new NotNull(),
             ],
                'help' => '',
            ])
            ->add('jogosPulados', IntegerType::class, [
                'label' => 'JogosPulados:',
                'required' => true,
                
                'constraints' => [ 
                    new NotNull(),
             ],
                'help' => '',
            ])
            ->add('usuario', ModelType::class,[
                'class' => Usuario::class,
                'property' => 'nick',
                'label' => 'Usuario:',
                'required' => false,
                
                'expanded' => false,
                'help' => '',
            ])
        ;
    }
    
    protected function configureShowFields(ShowMapper $showMapper): void
    {
        $showMapper
            ->add('id', null, [
                'label' => 'Id:',
            ])
            
            ->add('pontos', null, [
                'label' => 'Pontos:',
                
            ])
            ->add('acertos', null, [
                'label' => 'Acertos:',
                
            ])
            ->add('erros', null, [
                'label' => 'Erros:',
                
            ])
            ->add('jogosPulados', null, [
                'label' => 'JogosPulados:',
                
            ])
            ->add('usuario.nick', null, [
                'label' => 'Usuario:',
            ])
        ;
    }
    
}

